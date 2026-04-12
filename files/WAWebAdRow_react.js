__d(
  "WAWebAdRow.react",
  [
    "fbt",
    "WAWebAdBoostingStatus.react",
    "WAWebBizGatingUtils",
    "WAWebBusinessAdCreationUtils",
    "WAWebButton.react",
    "WAWebChatCell.react",
    "WAWebCommonAdsTypes",
    "WAWebDropdownItem.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebImg.react",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsCTWA",
    "WAWebWarningIcon.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        thumbnail: {
          height: "xnnlda6",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          alignSelf: "xamitd3",
          $$css: !0,
        },
        adRowWithNavBarRedesign: {
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xso031l",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        marginVert24: {
          marginTop: "x9u28bd",
          marginBottom: "x14mdic9",
          $$css: !0,
        },
        marginEnd24: { marginInlineEnd: "x7vsco6", $$css: !0 },
        marginHoriz24: {
          marginInlineStart: "xyxtwap",
          marginInlineEnd: "x7vsco6",
          $$css: !0,
        },
        paddingHoriz12: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function p(t) {
      var n = t.ad,
        a = t.isLast,
        i = n.ad,
        l = i.adId,
        u = i.boostingStatus,
        p = i.budget,
        _ = i.conversations,
        f = i.creativeText,
        g = i.reach,
        h = i.thumbnailUrl,
        y = d(null),
        C = y[0],
        b = y[1],
        v =
          f != null
            ? c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: f,
                ellipsify: !0,
                titlify: !0,
              })
            : s._(/*BTDS*/ "Your ad"),
        S = c.jsx(r("WAWebAdBoostingStatus.react"), { boostingStatus: u }),
        R = function () {
          o("WAWebExternalLink.react").openExternalLink(
            o("WAWebBusinessAdCreationUtils").getWhatsappViewAdDetailsUrl(l),
          );
        },
        L,
        E;
      switch (u) {
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.ACTIVE:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.NOT_DELIVERING:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.PAUSED: {
          if (o("WAWebBizGatingUtils").adManagementMetricsDisplayingEnabled()) {
            var k;
            (_ > 0
              ? (k = s._(
                  /*BTDS*/ '_j{"*":"{messages} messages","_1":"1 message"}',
                  [s._plural(_, "messages")],
                ))
              : (k = s._(/*BTDS*/ "Seen by {reach}", [s._param("reach", g)])),
              (L = c.jsxs("span", { children: [S, " \xB7 ", k] })));
          } else L = c.jsx("span", { children: S });
          break;
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.EXTENDABLE:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.FINISHED: {
          if (o("WAWebBizGatingUtils").adManagementMetricsDisplayingEnabled()) {
            var I = s._(/*BTDS*/ "{budget} spent", [s._param("budget", p)]);
            L = c.jsxs("span", { children: [S, " \xB7 ", I] });
          } else L = c.jsx("span", { children: S });
          break;
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.PENDING: {
          ((L = S),
            (E = c.jsx(o("WAWebText.react").WAWebTextSmall, {
              xstyle: m.paddingHoriz12,
              children: c.jsx("div", {
                children: s._(
                  /*BTDS*/ "Ad reviews typically take 24 hours. You'll be notified when the review is completed.",
                ),
              }),
            })));
          break;
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.LIMITED_DELIVERY:
          ((L = c.jsxs("span", {
            className: "x78zum5 x6s0dn4 x1trrmfo x129bwdz",
            children: [
              c.jsx(o("WAWebWarningIcon.react").WarningIcon, { height: 12 }),
              " ",
              S,
            ],
          })),
            (E = c.jsx("div", {
              className: "x1iw51ew xde1mab x12xbjc7",
              children: c.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
                stretch: !0,
                onClick: R,
                children: s._(/*BTDS*/ "Review ad details"),
              }),
            })));
          break;
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.CREATING:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.ERROR:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.REJECTED:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.SCHEDULED:
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.UNKNOWN:
          L = S;
          break;
      }
      var T = c.jsx(r("WAWebImg.react"), {
          alt: f != null ? f : "",
          className: (e || (e = r("stylex")))([
            m.thumbnail,
            m.marginVert24,
            m.marginEnd24,
          ]),
          src: h,
        }),
        D = o("WAWebBizGatingUtils").adManagementActionsDisplayingEnabled(),
        x = function () {
          return D;
        },
        $ = D
          ? function (e) {
              if (C != null) {
                b(null);
                return;
              }
              var t = function () {
                  var e = o("WAWebUserPrefsCTWA").generateAdCreationFlowId();
                  o("WAWebExternalLink.react").openExternalLink(
                    o("WAWebBusinessAdCreationUtils").getWhatsappEditAdUrl(
                      l,
                      e,
                    ),
                  );
                },
                r = [];
              if (
                (r.push(
                  c.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    { action: R, children: s._(/*BTDS*/ "View details") },
                    "mi-view-ad-details",
                  ),
                ),
                r.push(
                  c.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    { action: t, children: s._(/*BTDS*/ "Edit") },
                    "mi-edit-ad",
                  ),
                ),
                u === o("WAWebCommonAdsTypes").BoostingStatusEnum.FINISHED ||
                  u === o("WAWebCommonAdsTypes").BoostingStatusEnum.EXTENDABLE)
              ) {
                var a = n.ad.campaignGroupId,
                  i = function () {
                    o("WAWebExternalLink.react").openExternalLink(
                      o(
                        "WAWebBusinessAdCreationUtils",
                      ).getWhatsappRecreateAdUrl(a),
                    );
                  };
                r.push(
                  c.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    { action: i, children: s._(/*BTDS*/ "Promote again") },
                    "mi-recreate-ad",
                  ),
                );
              }
              b({ menu: r, event: e.event, anchor: e.anchor });
            }
          : void 0,
        P = function () {
          b(null);
        },
        N =
          C != null
            ? c.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "AdRowContextMenu",
                escapable: !0,
                popable: !0,
                dismissOnWindowResize: !0,
                requestDismiss: P,
                children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: C }),
              })
            : null;
      return c.jsxs("div", {
        className: "x17gydlx x1277o0a",
        children: [
          c.jsx(r("WAWebChatCell.react"), {
            className: e([m.marginHoriz24, !a && m.adRowWithNavBarRedesign]),
            primary: v,
            secondary: L,
            image: T,
            contextEnabled: x,
            onContext: $,
            onClick: D ? void 0 : R,
            theme: "ads-list",
            customImage: !0,
          }),
          N,
          E,
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
