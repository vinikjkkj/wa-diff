__d(
  "WAWebBizAdCreationAudienceSeeAllModal.react",
  [
    "fbt",
    "WAWebBackIcon.react",
    "WAWebBizAdLogger",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebRadio.react",
    "WAWebSearchInput",
    "WDSButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useState,
      p = {
        audienceList: {
          flexGrow: "x1iyjqo2",
          overflowY: "x1odjw0f",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        footer: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          flexShrink: "x2lah0s",
          paddingTop: "xl7twdi",
          $$css: !0,
        },
        header: {
          alignItems: "x6s0dn4",
          columnGap: "xs2akgl",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          maxHeight: "x1ea2lu8",
          width: "x3p9ev8",
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          rowGap: "x1f0uite",
          $$css: !0,
        },
        searchInput: { flexShrink: "x2lah0s", $$css: !0 },
      };
    function _(e) {
      var t,
        n = e.adAccountID,
        a = e.audienceData,
        i = e.loggerContext,
        l = e.lwiAudiences,
        c = e.onClose,
        _ = e.onSelectAudience,
        f = e.savedAudiences,
        g = m(""),
        h = g[0],
        y = g[1],
        C = m(a.audienceID),
        b = C[0],
        v = C[1],
        S = d(
          function () {
            var e = [];
            return (
              l != null && e.push.apply(e, Object.values(l)),
              f != null && f.length > 0 && e.push.apply(e, f),
              e
            );
          },
          [l, f],
        ),
        R = d(
          function () {
            if (h.trim() === "") return S;
            var e = h.toLowerCase();
            return S.filter(function (t) {
              return t.name.toLowerCase().includes(e);
            });
          },
          [S, h],
        ),
        L = function () {
          var e = S.find(function (e) {
            return e.audienceID === b;
          });
          (e != null &&
            (e.audienceID !== a.audienceID &&
              i != null &&
              r("WAWebBizAdLogger").log({
                event: "change_audience",
                loggerContext: i,
                adAccountID: n,
                startingValue: a.audienceID,
                endingValue: e.audienceID,
                extra: { audience_type: e.audienceOption },
              }),
            _(e)),
            c());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.Auto,
        children: u.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
          align: "stretch",
          xstyle: p.root,
          children: [
            u.jsxs(t.FlexRow, {
              align: "center",
              xstyle: p.header,
              children: [
                u.jsx(r("WDSButton.react"), {
                  Icon: o("WAWebBackIcon.react").BackIcon,
                  variant: "borderless",
                  size: "medium",
                  onPress: c,
                }),
                u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  children: s._(/*BTDS*/ "Audience"),
                }),
              ],
            }),
            u.jsx(t.FlexItem, {
              xstyle: p.searchInput,
              children: u.jsx(o("WAWebSearchInput").SearchInput, {
                placeholder: s._(/*BTDS*/ "Search"),
                onSearch: y,
              }),
            }),
            u.jsx(t.FlexColumn, {
              align: "stretch",
              xstyle: p.audienceList,
              role: "radiogroup",
              "aria-label": s._(/*BTDS*/ "Select target audience"),
              children: R.map(function (e) {
                return u.jsx(
                  o("WAWebRadio.react").RadioWithLabel,
                  {
                    name: "audience-selection",
                    value: e.audienceID,
                    label: e.name,
                    theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
                    checked: b === e.audienceID,
                    onChange: function () {
                      return v(e.audienceID);
                    },
                  },
                  e.audienceID,
                );
              }),
            }),
            u.jsx(t.FlexRow, {
              align: "center",
              justify: "end",
              xstyle: p.footer,
              children: u.jsx(r("WDSButton.react"), {
                label: s._(/*BTDS*/ "Select"),
                variant: "filled",
                size: "medium",
                type: "default",
                onPress: L,
              }),
            }),
          ],
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
