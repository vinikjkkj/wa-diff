__d(
  "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCreationTargetingModalContext",
    "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal_SavedAudienceDeleteMutation.graphql",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSText.react",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useState,
      f = {
        modalContainer: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        text: { textAlign: "x1yc453h", $$css: !0 },
      },
      g =
        e !== void 0
          ? e
          : (e = n(
              "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal_SavedAudienceDeleteMutation.graphql",
            ));
    function h(e, t, n, a) {
      o("CometRelay").commitMutation(t, {
        mutation: g,
        onCompleted: function () {
          n();
        },
        onError: function (t) {
          (r("err")(
            "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationComponent: Failed to delete audience",
            { cause: t },
          ),
            a());
        },
        updater: function (n) {
          n.delete(e);
        },
        variables: { savedAudienceID: e },
      });
    }
    function y(e) {
      var t = e.audienceID,
        n = e.onCancel,
        a = e.onComplete,
        i = p(r("WAWebBizAdCreationTargetingModalContext")),
        l = i.environment,
        u = _(!1),
        d = u[0],
        g = u[1],
        y = function () {
          n();
        },
        C = m(
          function () {
            (g(!0),
              h(
                t,
                l,
                function () {
                  (g(!1), a());
                },
                function () {
                  g(!1);
                },
              ));
          },
          [t, l, a],
        );
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "stretch",
          xstyle: f.modalContainer,
          children: [
            c.jsx(r("WDSText.react"), {
              type: "Headline2",
              colorName: "contentDefault",
              xstyle: f.text,
              children: s._(/*BTDS*/ "Delete audience?"),
            }),
            c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              xstyle: f.text,
              children: s._(
                /*BTDS*/ "Are you sure you want to delete this audience? It will be permanently removed from your audiences list.",
              ),
            }),
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "end",
              gap: 8,
              children: [
                c.jsx(r("WDSButton.react"), {
                  label: r("WAWebFbtCommon")("Cancel"),
                  variant: "tonal",
                  size: "medium",
                  type: "default",
                  onPress: y,
                  disabled: d,
                }),
                c.jsx(r("WDSButton.react"), {
                  label: s._(/*BTDS*/ "Delete audience"),
                  variant: "filled",
                  size: "medium",
                  type: "destructive",
                  onPress: C,
                  loading: d,
                  disabled: d,
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
