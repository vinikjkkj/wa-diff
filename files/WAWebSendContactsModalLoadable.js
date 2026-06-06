__d(
  "WAWebSendContactsModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebSendContactsModal.react",
        )
          .__setRef("WAWebSendContactsModalLoadable")
          .load();
        return e;
      }, "SendContactsModal"),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            title: s._(/*BTDS*/ "Send contacts"),
            error: !!t.error,
          });
        },
      });
    l.SendContactsModalLoadable = d;
  },
  226,
);
