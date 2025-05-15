import React from 'react';

// Define placeholder values (replace these with your actual data)
const effectiveDate = '5/6/2025';
const supportEmail = 'info@mistersteamer.com';
const appName = 'Mister Streamer';

function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        {/* --- English Version --- */}
        <div className="mb-12">
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
            Mr Steamer - Privacy Policy
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <strong>Effective Date:</strong> {effectiveDate}
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>1. Introduction</h3>
          <p>
            This Privacy Policy describes how <strong>{appName}</strong> ("we", "us", "our") collects, uses, discloses, and protects your personal information when you use our application and services. This policy is designed in accordance with the Personal Data Protection Law and related regulations of the Kingdom of Saudi Arabia.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            2. Information We Collect
          </h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li><strong>Personal Information:</strong> Name, contact details, address, and payment information provided during registration or booking.</li>
            <li><strong>Usage Data:</strong> Information about how you use our app, including service history and preferences.</li>
            <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers.</li>
            <li><strong>Location Data:</strong> With your consent, we may collect and use your location to provide services.</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            3. How We Use Your Information
          </h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li>To provide and improve our services.</li>
            <li>To process bookings and payments.</li>
            <li>To communicate with you regarding your account or services.</li>
            <li>To comply with legal obligations under Saudi law.</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            4. Sharing and Disclosure
          </h3>
          <p>
            We do not sell your personal information. We may share your data with service providers, payment processors, or government authorities as required by law or to fulfill our services.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            5. Data Security
          </h3>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            6. Your Rights
          </h3>
          <p>
            You have the right to access, correct, or request deletion of your personal data, subject to applicable Saudi laws. To exercise your rights, please contact us at <a href={`mailto:${supportEmail}`} style={{ color: '#1e90ff' }}>{supportEmail}</a>.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            7. Changes to This Policy
          </h3>
          <p>
            We may update this Privacy Policy from time to time. The latest version will always be available in the app.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            8. Contact Us
          </h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${supportEmail}`} style={{ color: '#1e90ff' }}>{supportEmail}</a>.
          </p>
        </div>

        <hr style={{ borderColor: '#444', margin: '2rem 0' }} />

        {/* --- Arabic Version --- */}
        <div dir="rtl" lang="ar">
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
            {appName} - سياسة الخصوصية
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <strong>تاريخ السريان:</strong> {effectiveDate}
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>١. المقدمة</h3>
          <p>
            توضح سياسة الخصوصية هذه كيف يقوم <strong>{appName}</strong> ("نحن"، "لنا") بجمع واستخدام والكشف عن وحماية معلوماتك الشخصية عند استخدامك لتطبيقنا وخدماتنا. تم إعداد هذه السياسة وفقًا لنظام حماية البيانات الشخصية في المملكة العربية السعودية.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            ٢. المعلومات التي نجمعها
          </h3>
          <ul style={{ paddingRight: '1.5rem', marginBottom: '2rem' }}>
            <li><strong>المعلومات الشخصية:</strong> الاسم، بيانات الاتصال، العنوان، ومعلومات الدفع المقدمة أثناء التسجيل أو الحجز.</li>
            <li><strong>بيانات الاستخدام:</strong> معلومات حول كيفية استخدامك للتطبيق، بما في ذلك سجل الخدمات والتفضيلات.</li>
            <li><strong>معلومات الجهاز:</strong> نوع الجهاز، نظام التشغيل، ومعرفات الجهاز الفريدة.</li>
            <li><strong>بيانات الموقع:</strong> قد نقوم بجمع واستخدام موقعك الجغرافي بموافقتك لتقديم الخدمات.</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            ٣. كيف نستخدم معلوماتك
          </h3>
          <ul style={{ paddingRight: '1.5rem', marginBottom: '2rem' }}>
            <li>لتقديم وتحسين خدماتنا.</li>
            <li>لمعالجة الحجوزات والمدفوعات.</li>
            <li>للتواصل معك بشأن حسابك أو الخدمات.</li>
            <li>للامتثال للالتزامات القانونية بموجب القانون السعودي.</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            ٤. مشاركة المعلومات والإفصاح
          </h3>
          <p>
            لا نقوم ببيع معلوماتك الشخصية. قد نشارك بياناتك مع مزودي الخدمات أو معالجي الدفع أو الجهات الحكومية حسب ما يقتضيه القانون أو لتنفيذ خدماتنا.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            ٥. أمان البيانات
          </h3>
          <p>
            نقوم بتنفيذ تدابير تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به أو الفقدان أو سوء الاستخدام.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            ٦. حقوقك
          </h3>
          <p>
            لديك الحق في الوصول إلى بياناتك الشخصية أو تصحيحها أو طلب حذفها، وذلك وفقًا للقوانين السعودية المعمول بها. لممارسة حقوقك، يرجى التواصل معنا على <a href={`mailto:${supportEmail}`} style={{ color: '#1e90ff' }}>{supportEmail}</a>.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            ٧. التغييرات على هذه السياسة
          </h3>
          <p>
            قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. ستكون النسخة الأحدث متاحة دائمًا في التطبيق.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            ٨. اتصل بنا
          </h3>
          <p>
            إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا على <a href={`mailto:${supportEmail}`} style={{ color: '#1e90ff' }}>{supportEmail}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
