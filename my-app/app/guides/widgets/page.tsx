export default function WidgetsGuidePage() {
  return (
    <div className="prose mx-auto p-4">
      <h1>widget integration guide</h1>
      <p>learn how to integrate graphyn&apos;s widgets into your application for enhanced data visualization and interaction.</p>

      <h2>overview</h2>
      <p>graphyn widgets provide:</p>
      <ul>
        <li>ready-to-use data visualization components</li>
        <li>realtime data updates</li>
        <li>customizable themes and layouts</li>
        <li>interactive data exploration</li>
      </ul>

      <h2>installation</h2>
      <pre><code>{`// install widget package
npm install @graphyn/widgets

// or using yarn
yarn add @graphyn/widgets`}</code></pre>

      <h2>basic usage</h2>
      <pre><code>{`import { GraphynWidget } from '@graphyn/widgets';

function DataVisualization() {
  return (
    <GraphynWidget
      type="chart"
      data={yourData}
      options={{
        theme: 'light',
        animate: true
      }}
    />
  );
}`}</code></pre>

      <h2>widget types</h2>
      <h3>chart widget</h3>
      <pre><code>{`import { ChartWidget } from '@graphyn/widgets';

function AnalyticsChart() {
  return (
    <ChartWidget
      data={analyticsData}
      options={{
        type: 'line',
        xAxis: 'timestamp',
        yAxis: 'value',
        colors: ['#4CAF50', '#2196F3']
      }}
    />
  );
}`}</code></pre>

      <h3>data grid widget</h3>
      <pre><code>{`import { DataGridWidget } from '@graphyn/widgets';

function DataTable() {
  return (
    <DataGridWidget
      data={tableData}
      options={{
        pagination: true,
        pageSize: 10,
        sortable: true,
        filterable: true
      }}
    />
  );
}`}</code></pre>

      <h2>realtime updates</h2>
      <pre><code>{`import { RealtimeWidget } from '@graphyn/widgets';

function LiveDashboard() {
  return (
    <RealtimeWidget
      source="wss://api.graphyn.com/realtime"
      channel="analytics"
      options={{
        updateInterval: 1000,
        aggregation: 'sum'
      }}
    />
  );
}`}</code></pre>

      <h2>customization</h2>
      <pre><code>{`// custom theme
const theme = {
  colors: {
    primary: '#1976D2',
    secondary: '#DC004E',
    background: '#FFFFFF'
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14
  }
};

function CustomWidget() {
  return (
    <GraphynWidget
      type="dashboard"
      theme={theme}
      layout={{
        grid: [3, 2],
        gap: '1rem'
      }}
    />
  );
}`}</code></pre>

      <h2>best practices</h2>
      <ul>
        <li>optimize data loading for better performance</li>
        <li>implement error boundaries for widget failures</li>
        <li>use appropriate widget types for your data</li>
        <li>maintain consistent styling across widgets</li>
      </ul>

      <h2>next steps</h2>
      <ul>
        <li>explore <a href="/api/frontend">frontend api</a> documentation</li>
        <li>learn about <a href="/guides/realtime">realtime updates</a></li>
        <li>check out <a href="/guides/transform">data transformation</a></li>
      </ul>
    </div>
  );
} 