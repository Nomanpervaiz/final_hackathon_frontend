import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, LucideMousePointerSquareDashed, Settings } from 'lucide-react';
const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        label: "Dashboard",
        key: "/admin",
        icon: <LayoutDashboard />
        
    },
    {
        label: "Loan Requests",
        key: "/admin/Loan-Requests",
        icon: <LucideMousePointerSquareDashed />
    },
    {
        label: "System",
        key: "/admin/system",
        icon: <Settings/>
    }
];
const UserLayout = ({ children }) => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
                backgroundColor : "green"
            }}
            
        >
            <Sider className='pt-6' collapsible style={{backgroundColor : "green"}} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu className='my-20 ' style={{backgroundColor : "green" }} theme="dark" onClick={(data)=> navigate(data.key)
                } defaultSelectedKeys={['userProfile']} mode="inline" items={items} />
            </Sider>
            <Layout  >
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                    />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            marginTop: 20,
                            minHeight: 460,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default UserLayout;