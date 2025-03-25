import * as React from 'react';

interface EmailTemplateProps {
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
}) => (
  <div>
    <h1>Welcome, {email}! </h1>
    <h1> We're contact us within 24 hours. </h1>
  </div>
);