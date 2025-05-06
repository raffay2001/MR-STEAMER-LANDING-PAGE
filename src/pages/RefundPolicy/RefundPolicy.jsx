import React from 'react';

// Define placeholder values (replace these with your actual data)
const effectiveDate = '5/6/2025';
const reportingTimeframe = '[e.g., 12 hours]';
const cancellationWindow = '[e.g., 2 hours]';
const supportEmail = 'info@mistersteamer.com';
const appName = 'Mister Streamer';

function RefundPolicy() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        {/* --- English Version --- */}
        <div className="mb-12">
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
            Mr Steamer - Refund Policy
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <strong>Effective Date:</strong> {effectiveDate}
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>1. Purpose</h3>
          <p>
            This Refund Policy outlines the circumstances under which <strong>{appName}</strong> ("we", "us", "our") will
            issue refunds for services booked through our application and governs the procedure for requesting a refund.
            This policy is designed in accordance with the Consumer Protection Law and the E-Commerce Law and its
            Implementing Regulations of the Kingdom of Saudi Arabia, under the supervision of the Ministry of Commerce.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            2. Eligibility for Refund
          </h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li>
              <strong>Service Not Rendered:</strong> If a confirmed and paid service booking was not performed by the
              service provider due to their cancellation, no-show, or failure to arrive within a reasonable timeframe from
              the scheduled appointment without prior acceptable rescheduling.
            </li>
            <li>
              <strong>Defective or Substandard Service Quality:</strong> If the service received is demonstrably defective,
              incomplete, or significantly below the standards described in the service booking (non-conforming service).
              Claims must be submitted within <strong>{reportingTimeframe}</strong> of the service completion time and must
              be accompanied by clear photographic or video evidence supporting the claim. Our team will investigate the
              claim based on KSA regulations to determine eligibility on a case-by-case basis.
            </li>
            <li>
              <strong>Billing Error:</strong> In case of verified accidental double billing or incorrect charges due to a
              technical error within the application.
            </li>
            <li>
              <strong>Cancellation by User (within allowed timeframe):</strong> If the user cancels the booking{' '}
              <em>before</em> the service provider has commenced travel to the location or <em>before</em> any stated
              non-refundable cancellation window (e.g., more than {cancellationWindow} before the scheduled time). Please
              refer to our Cancellation Policy for specific details and potential cancellation fees.
            </li>
            <li>
              <strong>Technical Issues:</strong> If a service could not be completed or properly initiated due to a
              verifiable technical malfunction originating solely from the <strong>{appName}</strong> application,
              preventing the service delivery.
            </li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            7. Governing Law
          </h3>
          <p>
            This Refund Policy is governed by and construed in accordance with the laws and regulations of the Kingdom of
            Saudi Arabia.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            8. Contact Us
          </h3>
          <p>
            If you have any questions about this Refund Policy, please contact us via the support section in the Mister
            Streamer app or at <a href={`mailto:${supportEmail}`} style={{ color: '#1e90ff' }}>{supportEmail}</a>.
          </p>
        </div>

        <hr style={{ borderColor: '#444', margin: '2rem 0' }} />

        {/* --- Arabic Version --- */}
        <div dir="rtl" lang="ar">
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
            {appName} - سياسة استرداد الأموال 
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <strong>تاريخ السريان:</strong> {effectiveDate}
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>١. الغرض</h3>
          <p>
            توضح سياسة استرداد الأموال هذه الظروف التي بموجبها سيقوم <strong>{appName}</strong> ("نحن"، "لنا") بإصدار
            المبالغ المستردة للخدمات المحجوزة عبر تطبيقنا وتحكم إجراءات طلب استرداد الأموال. تم تصميم هذه السياسة وفقًا
            لنظام حماية المستهلك ونظام التجارة الإلكترونية ولائحته التنفيذية في المملكة العربية السعودية، تحت إشراف
            وزارة التجارة.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            ٢. أهلية استرداد الأموال
          </h3>
          <ul style={{ paddingRight: '1.5rem', marginBottom: '2rem' }}>
            <li>
              <strong>عدم تقديم الخدمة:</strong> إذا لم يتم تنفيذ حجز خدمة مؤكد ومدفوع من قبل مزود الخدمة بسبب إلغائه
              للحجز، أو عدم حضوره، أو عدم وصوله خلال إطار زمني معقول من الموعد المحدد دون إعادة جدولة مقبولة مسبقًا.
            </li>
            <li>
              <strong>جودة خدمة دون المستوى / خدمة معيبة:</strong> إذا كانت الخدمة المُستلمة أقل بشكل واضح وكبير من
              المعايير الموضحة في حجز الخدمة، أو كانت غير مكتملة، أو تعتبر معيبة بموجب نظام حماية المستهلك السعودي.
            </li>
            <li>
              <strong>خطأ في الفوترة:</strong> في حالة التحقق من وجود فوترة مزدوجة عرضية أو رسوم غير صحيحة بسبب خطأ فني
              داخل التطبيق.
            </li>
            <li>
              <strong>إلغاء من قبل المستخدم (ضمن الإطار الزمني المسموح به):</strong> إذا قام المستخدم بإلغاء الحجز قبل
              بدء مزود الخدمة في التوجه إلى الموقع أو قبل أي نافذة إلغاء محددة غير قابلة للاسترداد.
            </li>
            <li>
              <strong>مشاكل فنية:</strong> إذا تعذر إكمال الخدمة أو بدؤها بشكل صحيح بسبب عطل فني يمكن التحقق منه ناشئ فقط
              من تطبيق {appName}.
            </li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            ٧. القانون الواجب التطبيق
          </h3>
          <p>
            تخضع سياسة استرداد الأموال هذه وتُفسر وفقًا لأنظمة ولوائح المملكة العربية السعودية.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            ٨. اتصل بنا
          </h3>
          <p>
            إذا كانت لديك أي أسئلة حول سياسة استرداد الأموال هذه، فيرجى الاتصال بنا عبر قسم الدعم في تطبيق {appName} أو
            على <a href={`mailto:${supportEmail}`} style={{ color: '#1e90ff' }}>{supportEmail}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;