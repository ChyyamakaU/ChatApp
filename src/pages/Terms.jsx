import chat from "./Chat";



function Terms() {
  return (
    <>
      <section className="bg-[#FAF9F6]">
        <div className="flex gap-1 py-4 mx-5 justify-center">
          <img src={chat} className="w-7" alt="" />
          <h1 className="text-[#352477] font-sans text-lg font-semibold">
            NU<span className="text-[#597e16] text-xl">D</span>GE
          </h1>
        </div>

        <div className="min-h-screen bg-[#FAF9F6] px-5 py-12">
          <div className="max-w-3xl mx-auto text-[#17151C]">
            <h1 className="text-3xl font-bold text-[#352477] mb-2">
              Terms and Conditions
            </h1>

            <p className="text-sm text-gray-500 mb-10">
              Last updated: September 2026
            </p>

            <section className="space-y-8 text-sm leading-7">
              <div>
                <h2 className="text-xl font-semibold mb-3">1. Using Nudge</h2>

                <p>
                  Nudge is a social messaging platform designed to help people
                  communicate and stay connected.
                </p>

                <p className="mt-3">
                  By creating an account or using Nudge, you agree to these
                  Terms and Conditions and all applicable laws.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">2. Your Account</h2>

                <p>
                  You are responsible for keeping your account information
                  accurate and your password secure.
                </p>

                <p className="mt-3">
                  You are responsible for activity that takes place through your
                  account. If you believe someone has accessed your account
                  without permission, you should notify us as soon as possible.
                </p>

                <p className="mt-3">
                  You must not create an account using someone else's identity
                  or impersonate another person.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">3. Your Content</h2>

                <p>
                  You retain ownership of the content you create and share on
                  Nudge.
                </p>

                <p className="mt-3">
                  By posting or sending content through the service, you give
                  Nudge the permission necessary to store, process, display, and
                  deliver that content so that the service can function.
                </p>

                <p className="mt-3">
                  You are responsible for the content you share.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  4. Acceptable Use
                </h2>

                <p className="mb-3">You agree not to use Nudge to:</p>

                <ul className="list-disc pl-6 space-y-1">
                  <li>Harass, threaten, or intimidate others</li>
                  <li>Send spam or unwanted messages</li>
                  <li>Impersonate another person</li>
                  <li>Share illegal or harmful content</li>
                  <li>
                    Attempt to gain unauthorised access to another account
                  </li>
                  <li>Distribute malware or malicious software</li>
                  <li>Abuse, disrupt, or interfere with the service</li>
                  <li>Break applicable laws</li>
                </ul>

                <p className="mt-3">
                  We may restrict or suspend accounts that violate these rules.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  5. Respect Other People
                </h2>

                <p>
                  Nudge works best when people treat each other with respect.
                  Think carefully before sending or sharing content,
                  particularly when communicating with people you do not know
                  personally.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  6. Account Suspension or Termination
                </h2>

                <p>
                  We may suspend or terminate an account if we believe it has
                  violated these Terms, poses a security risk, or is being used
                  in a way that could harm Nudge or its users.
                </p>

                <p className="mt-3">
                  You may stop using Nudge at any time and request deletion of
                  your account.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  7. Third-Party Services
                </h2>

                <p>
                  Nudge may contain links to or use services provided by third
                  parties. We are not responsible for the content, policies, or
                  practices of third-party services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  8. Service Availability
                </h2>

                <p>
                  We work to keep Nudge available and reliable, but we cannot
                  guarantee that the service will always be available,
                  uninterrupted, or error-free.
                </p>

                <p className="mt-3">
                  Features may be changed, suspended, or removed as Nudge
                  develops.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">9. Disclaimer</h2>

                <p>
                  Nudge is provided on an "as available" basis. To the extent
                  permitted by law, we make no guarantees regarding the
                  availability, reliability, or suitability of the service for a
                  particular purpose.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  10. Changes to These Terms
                </h2>

                <p>
                  We may update these Terms from time to time. When we make
                  changes, we will update the date at the top of this page.
                </p>

                <p className="mt-3">
                  Continuing to use Nudge after changes take effect means you
                  accept the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>

                <p>
                  If you have questions about these Terms and Conditions, please
                  contact us through the support options provided in Nudge.
                </p>
              </div>
            </section>

            <div className="mt-12">
              <a
                href="/"
                className="text-[#352477] font-semibold hover:underline"
              >
                Back to signIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Terms;
