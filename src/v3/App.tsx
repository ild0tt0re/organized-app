import { Suspense, lazy } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary, WaitingCircular } from '@components/index';
import { RootLayout } from '@layouts/index';

// lazy loading
const Dashboard = lazy(() => import('@pages/dashboard'));
const MyProfile = lazy(() => import('@pages/my_profile'));
const PersonsAll = lazy(() => import('@pages/persons/all_persons'));
const PersonDetails = lazy(() => import('@pages/persons/person_details'));
const PublicTalksList = lazy(() => import('@pages/meeting_materials/public_talks_list'));
const BranchOfficeReports = lazy(() => import('@pages/reports/branch_office'));
const MeetingAttendanceReports = lazy(() => import('@pages/reports/meeting_attendance'));
const MidweekMeeting = lazy(() => import('@pages/meetings/midweek'));
const MinistryReport = lazy(() => import('@pages/ministry_report'));
const VisitingSpeakers = lazy(() => import('@pages/persons/visiting_speakers'));
const WeekendMeeting = lazy(() => import('@pages/meetings/weekend'));
const ManageAccessAll = lazy(() => import('@pages/manage_access/manage_access_all'));
const ManageAccessPersonDetails = lazy(() => import('@pages/manage_access/manage_access_person_details'));
const WeeklySchedules = lazy(() => import('@pages/meetings/schedules'));

const ComponentsPreview = lazy(() => import('@components/preview'));
const PdfPreview = lazy(() => import('@components/preview/PDF_Peview'));

const queryClient = new QueryClient();

const App = ({ updatePwa }: { updatePwa: VoidFunction }) => {
  const router = createHashRouter([
    {
      errorElement: <ErrorBoundary />,
      children: [
        { path: '/components-preview', element: <ComponentsPreview /> },
        {
          path: '/pdf-document',
          element: <PdfPreview />,
        },
        {
          element: <RootLayout updatePwa={updatePwa} />,
          children: [
            { path: '/', element: <Dashboard /> },
            { path: '/persons', element: <PersonsAll /> },
            { path: '/reports/branch-office', element: <BranchOfficeReports /> },
            { path: '/reports/meeting-attendance', element: <MeetingAttendanceReports /> },
            { path: '/persons/:id', element: <PersonDetails /> },
            { path: '/persons/new', element: <PersonDetails /> },
            { path: '/user-profile', element: <MyProfile /> },
            { path: '/public-talks-list', element: <PublicTalksList /> },
            { path: '/ministry-report', element: <MinistryReport /> },
            { path: '/visiting-speakers', element: <VisitingSpeakers /> },
            { path: '/midweek-meeting', element: <MidweekMeeting /> },
            { path: '/weekend-meeting', element: <WeekendMeeting /> },
            { path: '/manage-access', element: <ManageAccessAll /> },
            { path: '/manage-access/:id', element: <ManageAccessPersonDetails /> },
            { path: '/weekly-schedules', element: <WeeklySchedules /> },
            { path: '*', element: <Dashboard /> },
          ],
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<WaitingCircular />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
};
export default App;
