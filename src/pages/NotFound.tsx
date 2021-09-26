import { withProfiler } from '../lib/utils/enhancers';

function NotFound() {
  return <h1>Page not found</h1>;
}

export default withProfiler(NotFound, 'notFound');
