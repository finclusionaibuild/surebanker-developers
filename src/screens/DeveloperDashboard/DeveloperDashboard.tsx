import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { BellIcon, SearchIcon, ArrowLeftIcon, CodeIcon, DatabaseIcon, ServerIcon, TerminalIcon, GitBranchIcon, ZapIcon, CloudIcon, LockIcon, UnlockIcon, RefreshCwIcon, PlayIcon, PauseIcon, HopIcon as StopIcon, MonitorIcon, CpuIcon, HardDriveIcon, NetworkIcon, ShieldCheckIcon, AlertTriangleIcon, CheckCircleIcon, XCircleIcon, ClockIcon, TrendingUpIcon, FileTextIcon, BookOpenIcon, MessageCircleIcon, HeadphonesIcon, HomeIcon, UserIcon, SettingsIcon, ActivityIcon, BarChart3Icon, KeyIcon, EyeIcon, CopyIcon, ExternalLinkIcon, DownloadIcon, UploadIcon, FolderIcon, FileIcon, PlusIcon, MinusIcon, EditIcon, TrashIcon, MoreHorizontalIcon } from "lucide-react";

interface APIEndpoint {
  id: string;
  name: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  status: 'active' | 'inactive' | 'deprecated';
  lastUsed: string;
  requests: number;
  responseTime: string;
}

interface WebhookEvent {
  id: string;
  event: string;
  url: string;
  status: 'active' | 'failed' | 'pending';
  lastTriggered: string;
  attempts: number;
}

interface MockDataSet {
  id: string;
  name: string;
  type: 'users' | 'transactions' | 'accounts' | 'cards';
  records: number;
  lastGenerated: string;
  size: string;
}

export const DeveloperDashboard = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedEnvironment, setSelectedEnvironment] = useState('sandbox');
  const navigate = useNavigate();

  const developerStats = [
    { label: "API Calls Today", value: "12,847", color: "text-blue-600", icon: <DatabaseIcon className="w-6 h-6" /> },
    { label: "Active Endpoints", value: "47", color: "text-green-600", icon: <ServerIcon className="w-6 h-6" /> },
    { label: "Webhook Events", value: "234", color: "text-purple-600", icon: <ZapIcon className="w-6 h-6" /> },
    { label: "Response Time", value: "120ms", color: "text-orange-600", icon: <ClockIcon className="w-6 h-6" /> },
  ];

  const apiEndpoints: APIEndpoint[] = [
    {
      id: "1",
      name: "Create User",
      method: "POST",
      endpoint: "/api/v1/users",
      status: "active",
      lastUsed: "2 minutes ago",
      requests: 1247,
      responseTime: "95ms"
    },
    {
      id: "2",
      name: "Get Transactions",
      method: "GET",
      endpoint: "/api/v1/transactions",
      status: "active",
      lastUsed: "5 minutes ago",
      requests: 3456,
      responseTime: "120ms"
    },
    {
      id: "3",
      name: "Process Payment",
      method: "POST",
      endpoint: "/api/v1/payments",
      status: "active",
      lastUsed: "1 hour ago",
      requests: 892,
      responseTime: "180ms"
    },
    {
      id: "4",
      name: "Create Card",
      method: "POST",
      endpoint: "/api/v1/cards",
      status: "inactive",
      lastUsed: "2 days ago",
      requests: 156,
      responseTime: "200ms"
    }
  ];

  const webhookEvents: WebhookEvent[] = [
    {
      id: "1",
      event: "payment.completed",
      url: "https://yourapp.com/webhooks/payment",
      status: "active",
      lastTriggered: "5 minutes ago",
      attempts: 1
    },
    {
      id: "2",
      event: "user.created",
      url: "https://yourapp.com/webhooks/user",
      status: "active",
      lastTriggered: "1 hour ago",
      attempts: 1
    },
    {
      id: "3",
      event: "transaction.failed",
      url: "https://yourapp.com/webhooks/transaction",
      status: "failed",
      lastTriggered: "2 hours ago",
      attempts: 3
    }
  ];

  const mockDataSets: MockDataSet[] = [
    {
      id: "1",
      name: "Sample Users",
      type: "users",
      records: 1000,
      lastGenerated: "Today",
      size: "2.4 MB"
    },
    {
      id: "2",
      name: "Test Transactions",
      type: "transactions",
      records: 5000,
      lastGenerated: "Yesterday",
      size: "8.7 MB"
    },
    {
      id: "3",
      name: "Demo Accounts",
      type: "accounts",
      records: 500,
      lastGenerated: "2 days ago",
      size: "1.2 MB"
    }
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-blue-100 text-blue-800';
      case 'POST': return 'bg-green-100 text-green-800';
      case 'PUT': return 'bg-yellow-100 text-yellow-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'deprecated': return 'bg-red-100 text-red-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Overview Tab
  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Developer Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {developerStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow card-no-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${stat.color.replace('text-', 'bg-').replace('600', '100')} rounded-lg flex items-center justify-center`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#64748B]">{stat.label}</p>
                  <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="card-no-shadow">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-[#1E293B] mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              className="h-16 flex flex-col items-center gap-2 bg-[#3B82F6] text-white"
              onClick={() => setSelectedTab('api-console')}
            >
              <CodeIcon className="w-5 h-5" />
              <span className="text-sm">API Console</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-16 flex flex-col items-center gap-2"
              onClick={() => setSelectedTab('sandbox')}
            >
              <ServerIcon className="w-5 h-5" />
              <span className="text-sm">Sandbox</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-16 flex flex-col items-center gap-2"
              onClick={() => setSelectedTab('webhooks')}
            >
              <ZapIcon className="w-5 h-5" />
              <span className="text-sm">Webhooks</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-16 flex flex-col items-center gap-2"
              onClick={() => setSelectedTab('mock-data')}
            >
              <DatabaseIcon className="w-5 h-5" />
              <span className="text-sm">Mock Data</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent API Activity */}
      <Card className="card-no-shadow">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-[#1E293B] mb-4">Recent API Activity</h3>
          <div className="space-y-3">
            {[
              { endpoint: "POST /api/v1/payments", status: "200", time: "2 min ago", response: "95ms" },
              { endpoint: "GET /api/v1/users/123", status: "200", time: "5 min ago", response: "120ms" },
              { endpoint: "POST /api/v1/transfers", status: "201", time: "8 min ago", response: "180ms" },
              { endpoint: "GET /api/v1/transactions", status: "200", time: "12 min ago", response: "110ms" },
              { endpoint: "PUT /api/v1/users/456", status: "400", time: "15 min ago", response: "85ms" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.status.startsWith('2') ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <span className={`text-xs font-bold ${
                      activity.status.startsWith('2') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                  <div>
                    <p className="font-mono text-sm text-[#1E293B]">{activity.endpoint}</p>
                    <p className="text-xs text-[#64748B]">{activity.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-[#1E293B]">{activity.response}</p>
                  <p className="text-xs text-[#64748B]">Response Time</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // API Console Tab
  const APIConsoleTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#1E293B]">API Console</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FileTextIcon className="w-4 h-4 mr-2" />
            Documentation
          </Button>
          <Button className="bg-[#3B82F6] text-white" size="sm">
            <PlusIcon className="w-4 h-4 mr-2" />
            New Endpoint
          </Button>
        </div>
      </div>

      <Card className="card-no-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1E293B]">API Endpoints</h3>
            <div className="flex gap-2">
              <select 
                value={selectedEnvironment}
                onChange={(e) => setSelectedEnvironment(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="sandbox">Sandbox</option>
                <option value="development">Development</option>
                <option value="staging">Staging</option>
                <option value="production">Production</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748B]">ENDPOINT</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748B]">METHOD</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748B]">STATUS</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748B]">REQUESTS</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748B]">RESPONSE TIME</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748B]">LAST USED</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748B]">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {apiEndpoints.map((endpoint) => (
                  <tr key={endpoint.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <CodeIcon className="w-4 h-4 text-[#3B82F6]" />
                        <div>
                          <p className="font-medium text-[#1E293B]">{endpoint.name}</p>
                          <p className="text-xs font-mono text-[#64748B]">{endpoint.endpoint}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={getMethodColor(endpoint.method)}>
                        {endpoint.method}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={getStatusColor(endpoint.status)}>
                        {endpoint.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-[#64748B]">{endpoint.requests.toLocaleString()}</td>
                    <td className="py-3 px-4 text-sm text-[#64748B]">{endpoint.responseTime}</td>
                    <td className="py-3 px-4 text-sm text-[#64748B]">{endpoint.lastUsed}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="p-1">
                          <EyeIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1">
                          <EditIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1">
                          <MoreHorizontalIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Sandbox Tab
  const SandboxTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#1E293B]">Sandbox Environment</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCwIcon className="w-4 h-4 mr-2" />
            Reset Environment
          </Button>
          <Button className="bg-[#3B82F6] text-white" size="sm">
            <PlayIcon className="w-4 h-4 mr-2" />
            Start Testing
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="card-no-shadow">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#1E293B] mb-4">Environment Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-[#1E293B]">API Server</span>
                </div>
                <Badge className="bg-green-100 text-green-800">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-[#1E293B]">Database</span>
                </div>
                <Badge className="bg-green-100 text-green-800">Connected</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-[#1E293B]">Webhooks</span>
                </div>
                <Badge className="bg-green-100 text-green-800">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-no-shadow">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#1E293B] mb-4">Test Credentials</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-[#64748B]">API Key</label>
                <div className="flex items-center gap-2">
                  <code className="flex-1 p-2 bg-gray-100 rounded text-sm font-mono">pk_test_1234567890abcdef</code>
                  <Button variant="ghost" size="sm" className="p-2">
                    <CopyIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div>
                <label className="text-sm text-[#64748B]">Secret Key</label>
                <div className="flex items-center gap-2">
                  <code className="flex-1 p-2 bg-gray-100 rounded text-sm font-mono">sk_test_••••••••••••••••</code>
                  <Button variant="ghost" size="sm" className="p-2">
                    <EyeIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div>
                <label className="text-sm text-[#64748B]">Base URL</label>
                <div className="flex items-center gap-2">
                  <code className="flex-1 p-2 bg-gray-100 rounded text-sm font-mono">https://sandbox-api.surebanker.com</code>
                  <Button variant="ghost" size="sm" className="p-2">
                    <ExternalLinkIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* API Testing Interface */}
      <Card className="card-no-shadow">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-[#1E293B] mb-4">API Testing Interface</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-2">Select Endpoint</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4">
                <option>POST /api/v1/users</option>
                <option>GET /api/v1/transactions</option>
                <option>POST /api/v1/payments</option>
                <option>GET /api/v1/accounts</option>
              </select>
              
              <label className="block text-sm font-medium text-[#1E293B] mb-2">Request Body</label>
              <textarea 
                className="w-full h-32 p-3 border border-gray-300 rounded-lg font-mono text-sm"
                placeholder='{\n  "name": "John Doe",\n  "email": "john@example.com"\n}'
              />
              
              <Button className="w-full mt-4 bg-[#3B82F6] text-white">
                <PlayIcon className="w-4 h-4 mr-2" />
                Send Request
              </Button>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-2">Response</label>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg h-64 overflow-y-auto font-mono text-sm">
                <div className="text-blue-400">HTTP/1.1 200 OK</div>
                <div className="text-gray-400">Content-Type: application/json</div>
                <div className="text-gray-400">Response-Time: 95ms</div>
                <br />
                <div className="text-green-400">
                  {`{
  "success": true,
  "data": {
    "id": "user_123456",
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2024-08-26T14:30:23Z"
  }
}`}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Webhooks Tab
  const WebhooksTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#1E293B]">Webhook Management</h2>
        <Button className="bg-[#3B82F6] text-white">
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Webhook
        </Button>
      </div>

      <Card className="card-no-shadow">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-[#1E293B] mb-4">Configured Webhooks</h3>
          <div className="space-y-4">
            {webhookEvents.map((webhook) => (
              <div key={webhook.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    webhook.status === 'active' ? 'bg-green-100' : 
                    webhook.status === 'failed' ? 'bg-red-100' : 'bg-yellow-100'
                  }`}>
                    <ZapIcon className={`w-5 h-5 ${
                      webhook.status === 'active' ? 'text-green-600' : 
                      webhook.status === 'failed' ? 'text-red-600' : 'text-yellow-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-medium text-[#1E293B]">{webhook.event}</p>
                    <p className="text-sm text-[#64748B] font-mono">{webhook.url}</p>
                    <p className="text-xs text-[#64748B]">Last triggered: {webhook.lastTriggered}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getStatusColor(webhook.status)}>
                    {webhook.status}
                  </Badge>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" className="p-2">
                      <EditIcon className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <PlayIcon className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Mock Data Tab
  const MockDataTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#1E293B]">Mock Data Generator</h2>
        <Button className="bg-[#3B82F6] text-white">
          <PlusIcon className="w-4 h-4 mr-2" />
          Generate New Dataset
        </Button>
      </div>

      <Card className="card-no-shadow">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-[#1E293B] mb-4">Available Datasets</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {mockDataSets.map((dataset) => (
              <Card key={dataset.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <DatabaseIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E293B]">{dataset.name}</h4>
                      <p className="text-sm text-[#64748B] capitalize">{dataset.type}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Records</span>
                      <span className="font-medium">{dataset.records.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Size</span>
                      <span className="font-medium">{dataset.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Generated</span>
                      <span className="font-medium">{dataset.lastGenerated}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <DownloadIcon className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <RefreshCwIcon className="w-4 h-4 mr-1" />
                      Regenerate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'api-console':
        return <APIConsoleTab />;
      case 'sandbox':
        return <SandboxTab />;
      case 'webhooks':
        return <WebhooksTab />;
      case 'mock-data':
        return <MockDataTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Developer Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img 
                src="/Logo Main Trans.png" 
                alt="SureBanker" 
                className="h-8 w-auto object-contain"
              />
              <Badge className="bg-blue-100 text-blue-800 text-xs">DEVELOPER</Badge>
            </div>
          </div>

          <nav className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-1">
              <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">
                DEVELOPER MENU
              </div>
              {[
                { 
                  name: "Dashboard", 
                  icon: <HomeIcon className="w-5 h-5" />, 
                  active: true,
                  onClick: () => navigate("/developer-dashboard")
                },
                { 
                  name: "API Management", 
                  icon: <DatabaseIcon className="w-5 h-5" />,
                  onClick: () => setSelectedTab('api-console')
                },
                { 
                  name: "Sandbox Environment", 
                  icon: <ServerIcon className="w-5 h-5" />,
                  onClick: () => setSelectedTab('sandbox')
                },
                { 
                  name: "Webhooks", 
                  icon: <ZapIcon className="w-5 h-5" />,
                  onClick: () => setSelectedTab('webhooks')
                },
                { 
                  name: "Mock Data", 
                  icon: <DatabaseIcon className="w-5 h-5" />,
                  onClick: () => setSelectedTab('mock-data')
                },
                { 
                  name: "Documentation", 
                  icon: <BookOpenIcon className="w-5 h-5" />,
                  onClick: () => window.open('https://docs.surebanker.com', '_blank')
                },
                { 
                  name: "Profile", 
                  icon: <UserIcon className="w-5 h-5" />,
                  onClick: () => navigate("/developer-profile")
                }
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={item.onClick}
                  className={`px-4 py-3 rounded-xl flex items-center gap-3 cursor-pointer transition-all duration-200 ${
                    item.active
                      ? "bg-[#3B82F6] text-white shadow-lg"
                      : "text-[#64748B] hover:bg-gray-50 hover:text-[#3B82F6]"
                  }`}
                >
                  <div className={`${item.active ? 'text-white' : ''}`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </nav>

          <div className="p-4">
            <Card className="bg-gradient-to-br from-[#3B82F6] via-[#1D4ED8] to-[#3B82F6] text-white overflow-hidden relative card-no-shadow">
              <CardContent className="p-4 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1D4ED8] to-[#1E40AF] rounded-full flex items-center justify-center">
                    <CodeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Developer Account</p>
                    <p className="text-sm text-gray-300">API Access</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#1D4ED8] to-[#1E40AF] hover:from-[#1E3A8A] hover:to-[#1E3A8A] text-white shadow-lg btn-primary">
                  Developer Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col ml-64">
          <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-40">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-[#1E293B] flex items-center gap-2">
                  <CodeIcon className="w-6 h-6 text-[#3B82F6]" />
                  Developer Dashboard
                </h1>
                <p className="text-sm text-[#64748B]">Build and test with SureBanker APIs</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'api-console', label: 'API Console' },
                    { id: 'sandbox', label: 'Sandbox' },
                    { id: 'webhooks', label: 'Webhooks' },
                    { id: 'mock-data', label: 'Mock Data' }
                  ].map((tab) => (
                    <Button
                      key={tab.id}
                      variant={selectedTab === tab.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedTab(tab.id)}
                      className={selectedTab === tab.id ? "bg-[#3B82F6] text-white" : ""}
                    >
                      {tab.label}
                    </Button>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="p-2 hover:bg-[#F8F9FF]">
                  <SearchIcon className="w-5 h-5 text-[#64748B]" />
                </Button>
                
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-2 hover:bg-[#F8F9FF]"
                  >
                    <BellIcon className="w-5 h-5 text-[#64748B]" />
                  </Button>
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center p-0 animate-pulse">
                    7
                  </Badge>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-sm font-medium text-[#1E293B]">Alex Developer</div>
                    <div className="text-xs text-[#64748B]">Senior Developer</div>
                  </div>
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-[#3B82F6] text-white">AD</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6">
            {renderTabContent()}
          </main>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <header className="bg-white px-4 py-4 flex items-center justify-between border-b">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-[#3B82F6] text-white">AD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-semibold text-[#1E293B]">Developer</h1>
              <p className="text-xs text-[#64748B]">API Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <BellIcon className="w-6 h-6 text-[#64748B]" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center p-0">
                7
              </Badge>
            </div>
          </div>
        </header>

        <main className="p-4 pb-20">
          {/* Mobile Tab Selector */}
          <div className="flex gap-1 bg-gray-100 rounded-lg p-1 mb-6 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'api-console', label: 'API' },
              { id: 'sandbox', label: 'Sandbox' },
              { id: 'webhooks', label: 'Webhooks' }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={selectedTab === tab.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedTab(tab.id)}
                className={`${selectedTab === tab.id ? "bg-[#3B82F6] text-white" : ""} whitespace-nowrap`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {renderTabContent()}
        </main>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
          <div className="flex items-center justify-around">
            {[
              { name: "Dashboard", icon: <HomeIcon className="w-6 h-6" />, active: true, onClick: () => navigate("/developer-dashboard") },
              { name: "API", icon: <DatabaseIcon className="w-6 h-6" />, onClick: () => setSelectedTab('api-console') },
              { name: "Docs", icon: <BookOpenIcon className="w-6 h-6" />, onClick: () => window.open('https://docs.surebanker.com', '_blank') },
              { name: "Profile", icon: <CodeIcon className="w-6 h-6" />, onClick: () => navigate("/developer-profile") }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center py-2 cursor-pointer"
                onClick={item.onClick}
              >
                <div className={`${item.active ? 'text-[#3B82F6]' : 'text-gray-400'}`}>
                  {item.icon}
                </div>
                <span className={`text-xs mt-1 ${item.active ? 'text-[#3B82F6] font-medium' : 'text-gray-400'}`}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};