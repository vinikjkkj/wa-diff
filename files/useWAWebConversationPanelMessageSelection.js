__d(
  "useWAWebConversationPanelMessageSelection",
  [
    "WANullthrows",
    "WAWebForwardActionUserJourneyLogger",
    "WAWebMultiSelectBar.react",
    "WAWebMultiSelection",
    "WAWebRevokeMetricUtils",
    "react",
    "useLazyRef",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e) {
      var t = c(!1),
        n = t[0],
        a = t[1],
        i = c(o("WAWebMultiSelectBar.react").MultiSelectMode.DEFAULT),
        l = i[0],
        s = i[1],
        d = r("useLazyRef")(function () {
          return new (r("WAWebMultiSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        m = u(function () {
          (o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(),
            a(!0));
        }, []),
        p = u(
          function (t, n, o) {
            if (!(!t || !e)) {
              var a = e.indexOf(t);
              if (a)
                for (
                  var i = e.indexOf(n),
                    l = i > a ? -1 : 1,
                    s = a + (o ? l : i < a ? 0 : l * 2);
                  i !== s;
                )
                  (d.current.setVal(r("WANullthrows")(e.at(i)).safe(), o, !0),
                    (i += l));
            }
          },
          [e, d],
        ),
        _ = u(
          function (e, t, n, r) {
            (a(!0), n && s(n));
            var i = d.current.getSelected().pop(),
              l = (r == null ? void 0 : r.shiftKey) === !0;
            (d.current.setVal(e, t, !0),
              t &&
                o(
                  "WAWebRevokeMetricUtils",
                ).UiRevokeActionHelper.messageSelected(),
              l && p(i, e, t));
          },
          [d, p],
        ),
        f = u(
          function () {
            n &&
              (d.current.unsetAll(),
              a(!1),
              s(o("WAWebMultiSelectBar.react").MultiSelectMode.DEFAULT),
              o(
                "WAWebForwardActionUserJourneyLogger",
              ).ForwardActionUserJourneyLogger.cancelInForwardToolbar());
          },
          [n, d],
        );
      return (
        o("useWAWebListener").useListener(e, "remove", function (e) {
          d.current.isSelected(e) && _(e, !1);
        }),
        {
          selectable: n,
          selectedMessages: d.current,
          handleSelectMessages: m,
          handleMessageSelect: _,
          handleCancelSelection: f,
          selectionMode: l,
        }
      );
    }
    l.default = d;
  },
  98,
);
