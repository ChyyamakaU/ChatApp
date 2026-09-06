import chat from "../assets/chat.png";

function Privacy() {
  return (
    <>
      <section className="bg-[#FAF9F6]">
        <div className="flex gap-1 py-4 mx-5 justify-center">
          <img src={chat} className="w-7" alt="" />
          <h1 className="text-[#352477] font-sans text-lg font-semibold">
            NU<span className="text-[#597e16] text-xl">D</span>GE
          </h1>
        </div>
        <div className="min-h-screen  px-5 py-12">
          <div className="max-w-3xl mx-auto text-[#17151C]">
            <h1 className="text-3xl font-bold text-[#352477] mb-2">
              Privacy Policy
            </h1>

            <p className="text-sm text-gray-500 mb-10">
              Last updated: September 2026
            </p>

            <section className="space-y-8 text-sm leading-7">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                  1. Information We Collect
                </h2>

                <p className="mb-3">
                  When you create and use a Nudge account, we may collect
                  information such as:
                </p>

                <ul className="list-disc pl-6 space-y-1">
                  <li>Your name and username</li>
                  <li>Email address</li>
                  <li>Password</li>
                  <li>Profile information you choose to provide</li>
                  <li>Messages and other content you send through Nudge</li>
                  <li>Information about how you use the app</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  2. How We Use Your Information
                </h2>

                <p className="mb-3">We may use your information to:</p>

                <ul className="list-disc pl-6 space-y-1">
                  <li>Create and manage your account</li>
                  <li>Provide messaging and other Nudge features</li>
                  <li>Help you connect with other users</li>
                  <li>Improve the app and user experience</li>
                  <li>Keep Nudge secure</li>
                  <li>Respond to support requests</li>
                  <li>Communicate important updates about the service</li>
                </ul>

                <p className="mt-3">
                  We do not sell your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  3. Messages and Content
                </h2>

                <p>
                  Nudge is designed for communication between people. Messages
                  and content you share may be processed or stored so that we
                  can provide the messaging service.
                </p>

                <p className="mt-3">
                  You should avoid sharing passwords, financial information, or
                  other sensitive information through your messages.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  4. Information Sharing
                </h2>

                <p>We do not sell or rent your personal information.</p>

                <p className="mt-3">
                  We may share limited information with service providers that
                  help us operate Nudge, such as hosting, authentication,
                  analytics, and security providers.
                </p>

                <p className="mt-3">
                  We may also disclose information when required by law or when
                  necessary to protect the rights, safety, and security of
                  Nudge, our users, or others.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">5. Your Choices</h2>

                <p>
                  You can review and update certain information associated with
                  your account.
                </p>

                <p className="mt-3">
                  You may also choose what information you share on your profile
                  and through your conversations.
                </p>

                <p className="mt-3">
                  If you no longer want to use Nudge, you may request that your
                  account and associated personal information be deleted,
                  subject to information we may be required to retain for legal
                  or security purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">6. Cookies</h2>

                <p>
                  Nudge may use cookies or similar technologies to keep you
                  signed in, remember preferences, understand how the service is
                  used, and improve the experience.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">7. Security</h2>

                <p>
                  We take reasonable measures to protect your information from
                  unauthorised access, loss, misuse, or disclosure.
                </p>

                <p className="mt-3">
                  However, no online service can guarantee complete security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  8. Children's Privacy
                </h2>

                <p>
                  Nudge is not intended for children who are below the minimum
                  age required to use the service in their country.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  9. Changes to This Policy
                </h2>

                <p>
                  We may update this Privacy Policy from time to time. When we
                  make significant changes, we will update the date at the top
                  of this page.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>

                <p>
                  If you have questions about this Privacy Policy or how your
                  information is handled, please contact us through the support
                  options provided in Nudge.
                </p>
              </div>
            </section>

            <div className="mt-12">
              <a
                href="/"
                className="text-[#352477] font-semibold hover:underline"
              >
                Back to Signin
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Privacy;
