__d(
  "WAWebBizBroadcastsUpsertAudienceList.react",
  [
    "fbt",
    "WAWebBizAdCard.react",
    "WAWebBizBroadcastsAudienceSelectionStrings",
    "WAWebBizBroadcastsContactChatCell.react",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WDSBaseCheckbox.react",
    "WDSSearchBar.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.entryPoint,
        a = e.selectedRecipientIds,
        i = e.setSelectedRecipientIds,
        l = m(""),
        c = l[0],
        d = l[1],
        p;
      if (t[0] !== c) {
        e: {
          o("WAWebContactCollection").ContactCollection.ensureSorted();
          var _ = o(
              "WAWebContactCollection",
            ).ContactCollection.getFilteredContacts({
              filterFn: null,
              showMe: !1,
              showWithoutName: !0,
            }),
            f = c.trim();
          if (f === "") {
            p = _;
            break e;
          }
          var g = f.toLowerCase();
          p = _.filter(function (e) {
            var t,
              n,
              r =
                (t = o("WAWebFrontendContactGetters").getDisplayName(e)) != null
                  ? t
                  : "",
              a = (n = o("WAWebContactGetters").getUserid(e)) != null ? n : "";
            return r.toLowerCase().includes(g) || a.includes(f);
          });
        }
        ((t[0] = c), (t[1] = p));
      } else p = t[1];
      var h = p,
        y;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o(
            "WAWebBizBroadcastsAudienceSelectionStrings",
          ).getChooseRecipientsHeader()),
          (t[2] = y))
        : (y = t[2]);
      var C, b;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { className: "xeuugli x6ikm8r x10wlt62" }),
          (b = { className: "x1tiyuxx x1nbhmlj x4tra6z x1j8ymqv" }),
          (t[3] = C),
          (t[4] = b))
        : ((C = t[3]), (b = t[4]));
      var v;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = o(
            "WAWebBizBroadcastsAudienceSelectionStrings",
          ).getSearchPlaceholder()),
          (t[5] = v))
        : (v = t[5]);
      var S;
      t[6] !== c
        ? ((S = u.jsx(
            "div",
            babelHelpers.extends({}, b, {
              children: u.jsx(r("WDSSearchBar.react"), {
                hintText: v,
                onValueChange: d,
                platform: "windowsWeb",
                value: c,
                testid: void 0,
              }),
            }),
          )),
          (t[6] = c),
          (t[7] = S))
        : (S = t[7]);
      var R, L;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Contact list")),
          (L = { className: "x1vathgz x11r3kk4 x140o2bo xh8yej3" }),
          (t[8] = R),
          (t[9] = L))
        : ((R = t[8]), (L = t[9]));
      var E;
      if (t[10] !== n || t[11] !== h || t[12] !== a || t[13] !== i) {
        var k;
        (t[15] !== n || t[16] !== a || t[17] !== i
          ? ((k = function (t, l) {
              var e = o("WAWebContactGetters").getUserid(t) || "",
                s = a.has(e),
                c = o("WAWebFrontendContactGetters").getDisplayName(t),
                d = function () {
                  e !== "" &&
                    i(function (t) {
                      var r = new Set(t);
                      return (
                        r.has(e)
                          ? r.delete(e)
                          : r.size <
                              o(
                                "WAWebBizBroadcastsRecipientUtils",
                              ).getRecipientLimit() && r.add(e),
                        o(
                          "WAWebBusinessBroadcastUserJourneyLogger",
                        ).BusinessBroadcastUserJourneyLogger.createAudienceContactCheckboxClicked(
                          r.size,
                          n,
                        ),
                        r
                      );
                    });
                },
                m = function (t) {
                  (t.key === "Enter" || t.key === " ") &&
                    (t.preventDefault(), d());
                };
              return u.jsxs(
                "tr",
                babelHelpers.extends(
                  { "data-testid": void 0 },
                  {
                    0: {
                      className:
                        "x1n67ipk xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x1a2a7pz x18z0m94",
                    },
                    1: {
                      className:
                        "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x1a2a7pz x18z0m94 x1h3rtpe",
                    },
                  }[!!s << 0],
                  {
                    "aria-selected": s,
                    tabIndex: 0,
                    onClick: d,
                    onKeyDown: m,
                    children: [
                      u.jsx("td", {
                        className:
                          "x1iw51ew xde1mab x3hqpx7 xyi3aci x1ga7v0g x16uus16 x1suzm8a",
                        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                          align: "center",
                          gap: 12,
                          children: [
                            u.jsx(r("WDSBaseCheckbox.react"), {
                              "aria-label": c,
                              onChange: function (t) {
                                (t == null || t.stopPropagation(), d());
                              },
                              tabIndex: -1,
                              value: s,
                              testid: void 0,
                            }),
                            u.jsx(
                              r("WAWebBizBroadcastsContactChatCell.react"),
                              { contact: t, index: l },
                            ),
                          ],
                        }),
                      }),
                      u.jsx("td", {
                        className:
                          "xvtqlqk xxymvpz x3hqpx7 x15mokao xwf5gio x1p453bz xbiv7yw",
                        children: u.jsx(r("WDSText.react"), {
                          colorName: "contentDeemphasized",
                          type: "Body1",
                          maxLines: 1,
                          testid: void 0,
                          children: o(
                            "WAWebFrontendContactGetters",
                          ).getFormattedPhoneAndType(t).displayName,
                        }),
                      }),
                    ],
                  },
                ),
                e || String(l),
              );
            }),
            (t[15] = n),
            (t[16] = a),
            (t[17] = i),
            (t[18] = k))
          : (k = t[18]),
          (E = h.map(k)),
          (t[10] = n),
          (t[11] = h),
          (t[12] = a),
          (t[13] = i),
          (t[14] = E));
      } else E = t[14];
      var I;
      t[19] !== E
        ? ((I = u.jsx(
            "table",
            babelHelpers.extends({ "aria-label": R }, L, {
              children: u.jsx("tbody", { children: E }),
            }),
          )),
          (t[19] = E),
          (t[20] = I))
        : (I = t[20]);
      var T;
      return (
        t[21] !== I || t[22] !== S
          ? ((T = u.jsx(r("WAWebBizAdCard.react"), {
              header: y,
              headerTestid: "biz-broadcasts-upsert-audience-table-header",
              children: u.jsxs(
                "div",
                babelHelpers.extends({}, C, { children: [S, I] }),
              ),
            })),
            (t[21] = I),
            (t[22] = S),
            (t[23] = T))
          : (T = t[23]),
        T
      );
    }
    l.default = p;
  },
  226,
);
