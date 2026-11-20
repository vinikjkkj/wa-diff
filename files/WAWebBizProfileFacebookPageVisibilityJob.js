__d(
  "WAWebBizProfileFacebookPageVisibilityJob",
  [
    "WAWebBizProfileFacebookPageVisibilityJobMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a,
            i = yield o("WAWebRelayClient").commitMutation(
              e !== void 0
                ? e
                : (e = n(
                    "WAWebBizProfileFacebookPageVisibilityJobMutation.graphql",
                  )),
              { visible: r },
              { accessToken: t, environmentType: "facebook" },
            );
          return i == null || (a = i.xfb_smb_business_settings_set) == null
            ? void 0
            : a.is_facebook_page_visible;
        })),
        u.apply(this, arguments)
      );
    }
    l.updateFacebookPageVisibleOnProfile = s;
  },
  98,
);
