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
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useState;
    function p(e) {
      var t = e.entryPoint,
        n = e.selectedRecipientIds,
        a = e.setSelectedRecipientIds,
        i = m(""),
        l = i[0],
        c = i[1],
        p = d(
          function () {
            o("WAWebContactCollection").ContactCollection.ensureSorted();
            var e = o(
                "WAWebContactCollection",
              ).ContactCollection.getFilteredContacts({
                filterFn: null,
                showMe: !1,
                showWithoutName: !0,
              }),
              t = l.trim();
            if (t === "") return e;
            var n = t.toLowerCase();
            return e.filter(function (e) {
              var r,
                a,
                i =
                  (r = o("WAWebFrontendContactGetters").getDisplayName(e)) !=
                  null
                    ? r
                    : "",
                l =
                  (a = o("WAWebContactGetters").getUserid(e)) != null ? a : "";
              return i.toLowerCase().includes(n) || l.includes(t);
            });
          },
          [l],
        );
      return u.jsx(r("WAWebBizAdCard.react"), {
        header: o(
          "WAWebBizBroadcastsAudienceSelectionStrings",
        ).getChooseRecipientsHeader(),
        headerTestid: "biz-broadcasts-upsert-audience-table-header",
        children: u.jsxs("div", {
          className: "xeuugli x6ikm8r x10wlt62",
          children: [
            u.jsx("div", {
              className: "x1tiyuxx x1nbhmlj x4tra6z x1j8ymqv",
              children: u.jsx(r("WDSSearchBar.react"), {
                hintText: o(
                  "WAWebBizBroadcastsAudienceSelectionStrings",
                ).getSearchPlaceholder(),
                onValueChange: c,
                platform: "windowsWeb",
                value: l,
                testid: void 0,
              }),
            }),
            u.jsx("table", {
              "aria-label": s._(/*BTDS*/ "Contact list"),
              className: "x1vathgz x11r3kk4 x140o2bo xh8yej3",
              children: u.jsx("tbody", {
                children: p.map(function (e, i) {
                  var l = o("WAWebContactGetters").getUserid(e) || "",
                    s = n.has(l),
                    c = o("WAWebFrontendContactGetters").getDisplayName(e),
                    d = function () {
                      l !== "" &&
                        a(function (e) {
                          var n = new Set(e);
                          return (
                            n.has(l)
                              ? n.delete(l)
                              : n.size <
                                  o(
                                    "WAWebBizBroadcastsRecipientUtils",
                                  ).getRecipientLimit() && n.add(l),
                            o(
                              "WAWebBusinessBroadcastUserJourneyLogger",
                            ).BusinessBroadcastUserJourneyLogger.createAudienceContactCheckboxClicked(
                              n.size,
                              t,
                            ),
                            n
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
                                  { contact: e, index: i },
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
                              ).getFormattedPhoneAndType(e).displayName,
                            }),
                          }),
                        ],
                      },
                    ),
                    l || String(i),
                  );
                }),
              }),
            }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
