__d(
  "useWAWebNewsletterPendingInvites",
  [
    "WALogger",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterPendingInvitesAction",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s || (s = o("react"))).useEffect;
    function c(t) {
      var a,
        i = r("useWAWebUnmountSignal")(),
        l = r("useWAWebEventTargetValue")(
          (a = t.newsletterMetadata) == null ? void 0 : a.pendingAdmins,
          ["add", "remove", "change"],
          function () {
            var e, n;
            return (e =
              (n = t.newsletterMetadata) == null
                ? void 0
                : n.pendingAdmins.compactMap(function (e) {
                    return e.contact;
                  })) != null
              ? e
              : [];
          },
        );
      return (
        u(
          function () {
            n("asyncToGeneratorRuntime")
              .asyncToGenerator(function* () {
                i.aborted ||
                  !o("WAWebNewsletterMembershipUtil").iAmOwner(
                    t.newsletterMetadata,
                  ) ||
                  !o(
                    "WAWebNewsletterGatingUtils",
                  ).isNewsletterCreationEnabled() ||
                  (yield o(
                    "WAWebNewsletterPendingInvitesAction",
                  ).getNewsletterPendingInvitesAction(t));
              })()
              .catch(function (n) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[useNewsletterPendingInvites] Failed to get pending invites for newsletter ",
                        "",
                      ])),
                    t.id,
                  )
                  .sendLogs("newsletter-hook-failed-to-get-pending-invites");
              });
          },
          [t, i],
        ),
        l
      );
    }
    l.useNewsletterPendingInvites = c;
  },
  98,
);
