import React from 'react';

const effectiveDate = '5/6/2025';
const supportEmail = 'info@mistersteamer.com';
const appName = 'Mister Steamer';

function TermsAndConditions() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        {/* --- English Version --- */}
        <div className="mb-12">
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
            Mr Steamer - Terms and Conditions
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <strong>Effective Date:</strong> {effectiveDate}
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>1. Acceptance of Terms</h3>
          <p>
            By using <strong>{appName}</strong> ("we", "us", "our") services and application, you agree to these Terms and Conditions, which are governed by the laws of the Kingdom of Saudi Arabia.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>2. Services</h3>
          <p>
            We provide car wash and related services as described in our app. Service availability may vary by location and time.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>3. User Responsibilities</h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li>Provide accurate and complete information when booking services.</li>
            <li>Ensure access to your vehicle at the scheduled time and location.</li>
            <li>Comply with all applicable laws and regulations.</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>4. Payment</h3>
          <p>
            Payment must be made through the app using approved methods. All fees are due at the time of booking unless otherwise stated.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>5. Cancellations and Refunds</h3>
          <p>
            Please refer to our Refund Policy for details on cancellations and refunds.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>6. Limitation of Liability</h3>
          <p>
            We are not liable for any indirect, incidental, or consequential damages arising from your use of our services, except as required by Saudi law.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>7. Changes to Terms</h3>
          <p>
            We may update these Terms and Conditions at any time. The latest version will be available in the app.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>8. Contact Us</h3>
          <p>
            For questions about these Terms and Conditions, contact us at <a href={`mailto:${supportEmail}`} style={{ color: '#1e90ff' }}>{supportEmail}</a>.
          </p>
        </div>

        <hr style={{ borderColor: '#444', margin: '2rem 0' }} />

        {/* --- Arabic Version --- */}
        <div dir="rtl" lang="ar">
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
            {appName} - الشروط والأحكام
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <strong>تاريخ السريان:</strong> {effectiveDate}
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>١. قبول الشروط</h3>
          <p>
            باستخدامك لخدمات وتطبيق <strong>{appName}</strong> ("نحن"، "لنا")، فإنك توافق على هذه الشروط والأحكام التي تخضع لأنظمة المملكة العربية السعودية.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>٢. الخدمات</h3>
          <p>
            نقدم خدمات غسيل السيارات والخدمات ذات الصلة كما هو موضح في التطبيق. قد تختلف توفر الخدمات حسب الموقع والوقت.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>٣. مسؤوليات المستخدم</h3>
          <ul style={{ paddingRight: '1.5rem', marginBottom: '2rem' }}>
            <li>تقديم معلومات دقيقة وكاملة عند حجز الخدمات.</li>
            <li>ضمان الوصول إلى سيارتك في الوقت والمكان المحددين.</li>
            <li>الامتثال لجميع الأنظمة واللوائح المعمول بها.</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>٤. الدفع</h3>
          <p>
            يجب دفع الرسوم من خلال التطبيق باستخدام الطرق المعتمدة. جميع الرسوم مستحقة عند الحجز ما لم يُذكر خلاف ذلك.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>٥. الإلغاء والاسترداد</h3>
          <p>
            يرجى الرجوع إلى سياسة الاسترداد الخاصة بنا لمزيد من التفاصيل حول الإلغاء والاسترداد.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>٦. تحديد المسؤولية</h3>
          <p>
            نحن غير مسؤولين عن أي أضرار غير مباشرة أو عرضية أو تبعية تنشأ عن استخدامك لخدماتنا، باستثناء ما يقتضيه القانون السعودي.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>٧. التغييرات على الشروط</h3>
          <p>
            قد نقوم بتحديث هذه الشروط والأحكام في أي وقت. ستكون النسخة الأحدث متاحة دائمًا في التطبيق.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>٨. اتصل بنا</h3>
          <p>
            إذا كانت لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا على <a href={`mailto:${supportEmail}`} style={{ color: '#1e90ff' }}>{supportEmail}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
