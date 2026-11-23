__d(
  "WAWebBizProfileFacebookUnlinkPageJob",
  ["WAWebBizProfileFacebookUnlinkPageJobMutation.graphql", "WAWebRelayClient"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, r) {
      var a,
        i = await o("WAWebRelayClient").commitMutation(
          e !== void 0
            ? e
            : (e = n("WAWebBizProfileFacebookUnlinkPageJobMutation.graphql")),
          { pageId: r },
          { accessToken: t, environmentType: "facebook" },
        );
      return (
        (i == null || (a = i.xfb_wa_biz_unlink_account) == null
          ? void 0
          : a.success) === !0
      );
    }
    l.unlinkFacebookPageFromWhatsApp = s;
  },
  98,
);
