import { QueryClient, QueryClientProvider, } from 'react-query'
import { Base } from '../templates/Base';

const queryClient = new QueryClient()

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Base />
    </QueryClientProvider>
  )
};

export default Index;
