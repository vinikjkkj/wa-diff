__d(
  "WAWebSupportAIStartChatErrorModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebSupportAIStartChatErrorLoadingPopup.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebSupportAIStartChatErrorModal.react",
        )
          .__setRef("WAWebSupportAIStartChatErrorModalLoadable")
          .load();
        return e;
      }, "StartAISupportChatErrorModal"),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebSupportAIStartChatErrorLoadingPopup.react"), {
            okText: s._(/*BTDS*/ ""),
            error: !!t.error,
          });
        },
      });
    l.SupportAIStartChatErrorModalLoadable = d;
  },
  226,
);
