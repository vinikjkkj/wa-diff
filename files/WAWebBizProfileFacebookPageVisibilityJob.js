__d(
  "WAWebBizProfileFacebookPageVisibilityJob",
  [
    "WAWebBizProfileFacebookPageVisibilityJobMutation.graphql",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, r) {
      var a,
        i = await o("WAWebRelayClient").commitMutation(
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
    }
    l.updateFacebookPageVisibleOnProfile = s;
  },
  98,
);
