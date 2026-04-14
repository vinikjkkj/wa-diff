__d(
  "WAWebBizBroadcastsSelectedRecipientsSection.react",
  [
    "fbt",
    "WAWebBizAdCard.react",
    "WAWebBizBroadcastsAudienceSelectionStrings",
    "WAWebBizBroadcastsContactChatCell.react",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WDSButton.react",
    "WDSIconIcDelete.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = { focusableSection: { outline: "x1a2a7pz", $$css: !0 } };
    function g(e) {
      var t = e.selectedRecipientIds,
        n = e.setSelectedRecipientIds,
        a = _(null),
        i = _(!1);
      m(
        function () {
          if (i.current) {
            var e = a.current;
            if (e != null && !e.contains(document.activeElement)) {
              i.current = !1;
              var t = e.querySelector('button, [tabindex="0"]');
              t instanceof HTMLElement ? t.focus() : e.focus();
            }
          }
        },
        void 0,
      );
      var l = p(
          function () {
            var e = [];
            for (var n of t) {
              var r = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(
                n,
              );
              r != null && e.push(r);
            }
            return e;
          },
          [t],
        ),
        c = d(
          function (e) {
            (n(function (t) {
              var n = new Set(t);
              return (n.delete(e), n);
            }),
              (i.current = !0));
          },
          [n],
        );
      return u.jsx(r("WAWebBizAdCard.react"), {
        header: o(
          "WAWebBizBroadcastsAudienceSelectionStrings",
        ).getRecipientsHeader(),
        headerTestid: "biz-broadcasts-selected-recipients-header",
        subtitle: o(
          "WAWebBizBroadcastsAudienceSelectionStrings",
        ).getSelectedCountText(
          t.size,
          o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit(),
        ),
        subtitleTestid: "biz-broadcasts-selected-recipients-count",
        children: u.jsx(o("WAWebFlex.react").FlexColumn, {
          align: "stretch",
          ref: a,
          tabIndex: -1,
          xstyle: f.focusableSection,
          role: "list",
          "aria-label": s._(/*BTDS*/ "Selected people to receive the message"),
          children: l.map(function (e, t) {
            var n = e.id.user,
              a = o("WAWebFrontendContactGetters").getDisplayName(e);
            return u.jsxs(
              o("WAWebFlex.react").FlexRow,
              {
                role: "listitem",
                align: "center",
                justify: "all",
                testid: void 0,
                children: [
                  u.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
                    contact: e,
                    index: t,
                  }),
                  u.jsx(r("WDSButton.react"), {
                    "aria-label": s._(
                      /*BTDS*/ "Remove {name} from recipients",
                      [s._param("name", a)],
                    ),
                    Icon: r("WDSIconIcDelete.react"),
                    onPress: function () {
                      return c(n);
                    },
                    size: "small",
                    testid: void 0,
                    variant: "borderless",
                  }),
                ],
              },
              n,
            );
          }),
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
