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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(15),
        n = e.selectedRecipientIds,
        a = e.setSelectedRecipientIds,
        i = _(null),
        l = _(!1),
        c;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function () {
            if (l.current) {
              var e = i.current;
              if (e != null && !e.contains(document.activeElement)) {
                l.current = !1;
                var t = e.querySelector('button, [tabindex="0"]');
                t instanceof HTMLElement ? t.focus() : e.focus();
              }
            }
          }),
          (t[0] = c))
        : (c = t[0]),
        m(c, void 0));
      var d;
      if (t[1] !== n) {
        d = [];
        for (var p of n) {
          var g = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(p);
          g != null && d.push(g);
        }
        ((t[1] = n), (t[2] = d));
      } else d = t[2];
      var h = d,
        y;
      t[3] !== a
        ? ((y = function (t) {
            (a(function (e) {
              var n = new Set(e);
              return (n.delete(t), n);
            }),
              (l.current = !0));
          }),
          (t[3] = a),
          (t[4] = y))
        : (y = t[4]);
      var C = y,
        b;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = o(
            "WAWebBizBroadcastsAudienceSelectionStrings",
          ).getRecipientsHeader()),
          (t[5] = b))
        : (b = t[5]);
      var v;
      t[6] !== n.size
        ? ((v = o(
            "WAWebBizBroadcastsAudienceSelectionStrings",
          ).getSelectedCountText(
            n.size,
            o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit(),
          )),
          (t[6] = n.size),
          (t[7] = v))
        : (v = t[7]);
      var S;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Selected people to receive the message")),
          (t[8] = S))
        : (S = t[8]);
      var R;
      t[9] !== C || t[10] !== h
        ? ((R = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            ref: i,
            tabIndex: -1,
            xstyle: f.focusableSection,
            role: "list",
            "aria-label": S,
            children: h.map(function (e, t) {
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
                        return C(n);
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
          })),
          (t[9] = C),
          (t[10] = h),
          (t[11] = R))
        : (R = t[11]);
      var L;
      return (
        t[12] !== v || t[13] !== R
          ? ((L = u.jsx(r("WAWebBizAdCard.react"), {
              header: b,
              headerTestid: "biz-broadcasts-selected-recipients-header",
              subtitle: v,
              subtitleTestid: "biz-broadcasts-selected-recipients-count",
              children: R,
            })),
            (t[12] = v),
            (t[13] = R),
            (t[14] = L))
          : (L = t[14]),
        L
      );
    }
    l.default = g;
  },
  226,
);
