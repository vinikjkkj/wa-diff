__d(
  "WAWebStatusCloseFriendsDialog.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebDetailImage.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSColorStyles.stylex",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        content: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingInlineStart: "xdylf7x",
          paddingInlineEnd: "x5s3kwk",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "xv8gdss",
          paddingBottom: "xgb8hzy",
          rowGap: "xgpatz3",
          $$css: !0,
        },
        centered: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        profileRing: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          borderTopWidth: "xmn4e3e",
          borderInlineEndWidth: "x1if355w",
          borderBottomWidth: "x2x41l1",
          borderInlineStartWidth: "xct1zlm",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1pzn5kq",
          borderInlineEndColor: "x1w71v5a",
          borderBottomColor: "x1hlfp7v",
          borderInlineStartColor: "xctptvr",
          paddingTop: "x1nn3v0j",
          paddingInlineEnd: "x14vy60q",
          paddingBottom: "x1120s5i",
          paddingInlineStart: "xyiysdx",
          display: "x3nfvp2",
          $$css: !0,
        },
        badge: {
          display: "x3nfvp2",
          alignItems: "x6s0dn4",
          alignSelf: "xamitd3",
          height: "x90ne7k",
          marginTop: "x1rxo0ah",
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          columnGap: "x1qgv0r9",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          paddingInlineStart: "xmzvs34",
          paddingInlineEnd: "xf159sx",
          paddingLeft: null,
          paddingRight: null,
          boxShadow: "xt3d86x",
          $$css: !0,
        },
      };
    function d(e, t, n, a, i, l) {
      var d = function () {
        (o("WAWebModalManager").ModalManager.off("close_modal", d), l());
      };
      (o("WAWebModalManager").ModalManager.on("close_modal", d),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            type: o("WAWebModal.react").ModalTheme.StatusReport,
            onOK: function () {
              (o("WAWebModalManager").ModalManager.off("close_modal", d),
                o("WAWebModalManager").ModalManager.close(),
                l());
            },
            buttonAlign: "end",
            okText: s._(/*BTDS*/ "OK"),
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: c.content,
              children: [
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  xstyle: c.centered,
                  children: [
                    e != null &&
                      u.jsx(o("WAWebFlex.react").FlexRow, {
                        inline: !0,
                        xstyle: c.profileRing,
                        children: u.jsx(
                          o("WAWebDetailImage.react").DetailImage,
                          { id: e, theme: "status", size: 96 },
                        ),
                      }),
                    u.jsx(o("WAWebFlex.react").FlexRow, {
                      inline: !0,
                      align: "center",
                      xstyle: [
                        c.badge,
                        o("WDSColorStyles.stylex").WDSBackgroundColorStyles
                          .surfaceDefault,
                      ],
                      children: u.jsxs(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDefault",
                        children: [n, " ", a],
                      }),
                    }),
                  ],
                }),
                u.jsx(r("WDSText.react"), {
                  type: "Headline1",
                  colorName: "contentDefault",
                  children: i
                    ? s._(
                        /*BTDS*/ "You shared this status with a custom audience",
                      )
                    : s._(
                        /*BTDS*/ "You're in {contact_name}'s custom audience",
                        [s._param("contact_name", t)],
                      ),
                }),
                u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDeemphasized",
                  children: i
                    ? s._(
                        /*BTDS*/ 'People you added to " {list_name} " can see the audience name and emoji. {learn_more}',
                        [
                          s._param("list_name", a),
                          s._param(
                            "learn_more",
                            u.jsx(r("WAWebClickableLink.react"), {
                              onClick: function () {
                                return o(
                                  "WAWebExternalLink.react",
                                ).openExternalLink(
                                  o("WAWebFaqUrl").getCloseFriendLearnMoreUrl(),
                                );
                              },
                              children: s._(/*BTDS*/ "Learn more"),
                            }),
                          ),
                        ],
                      )
                    : s._(
                        /*BTDS*/ 'Only people {contact_name} added to " {list_name} " can see this status. {learn_more}',
                        [
                          s._param("contact_name", t),
                          s._param("list_name", a),
                          s._param(
                            "learn_more",
                            u.jsx(r("WAWebClickableLink.react"), {
                              onClick: function () {
                                return o(
                                  "WAWebExternalLink.react",
                                ).openExternalLink(
                                  o("WAWebFaqUrl").getCloseFriendLearnMoreUrl(),
                                );
                              },
                              children: s._(/*BTDS*/ "Learn more"),
                            }),
                          ),
                        ],
                      ),
                }),
              ],
            }),
          }),
        ));
    }
    l.showCloseFriendsDialog = d;
  },
  226,
);
