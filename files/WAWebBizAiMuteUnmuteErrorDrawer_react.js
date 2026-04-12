__d(
  "WAWebBizAiMuteUnmuteErrorDrawer.react",
  ["fbt", "WAWebConfirmPopup.react", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "biz-ai-mute-error" },
        title: s._(/*BTDS*/ "AI responses are not available for this chat."),
        okText: s._(/*BTDS*/ "OK"),
        onOK: o("WAWebModalManager").closeModalManager,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
