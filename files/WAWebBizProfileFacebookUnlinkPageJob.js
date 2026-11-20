__d(
  "WAWebBizProfileFacebookUnlinkPageJob",
  [
    "WAWebBizProfileFacebookUnlinkPageJobMutation.graphql",
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
                    "WAWebBizProfileFacebookUnlinkPageJobMutation.graphql",
                  )),
              { pageId: r },
              { accessToken: t, environmentType: "facebook" },
            );
          return (
            (i == null || (a = i.xfb_wa_biz_unlink_account) == null
              ? void 0
              : a.success) === !0
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.unlinkFacebookPageFromWhatsApp = s;
  },
  98,
);
