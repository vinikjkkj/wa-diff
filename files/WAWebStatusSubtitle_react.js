__d(
  "WAWebStatusSubtitle.react",
  [
    "fbt",
    "invariant",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebMegaphoneRefreshedIcon.react",
    "WAWebMentionsRefreshedIcon.react",
    "WAWebMsgGetters",
    "WAWebMusicStatusAttribution.react",
    "WAWebNewsletterGatingUtils",
    "WAWebProtobufsStatusAttributions.pb",
    "WAWebStatusCloseFriendsDialog.react",
    "WAWebStatusExternalShareUtils",
    "WAWebStatusGatingUtils",
    "WAWebStatusNewsletterCTA.react",
    "WAWebStatusSubtitleAttribution.react",
    "WAWebStatusViewerActionWamEvent",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusViewActionType",
    "WAWebWamEnumTopBarAttributionType",
    "WDSIconWdsIcChannels.react",
    "WDSText.react",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useRef,
      f = m.useState,
      g = {
        statusMeta: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
      },
      h = 5e3,
      y = 3;
    function C(e) {
      return e === "music"
        ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE.MUSIC
        : e === "mention"
          ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE
              .MENTION
          : e === "groupStatus"
            ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE
                .GROUP_STATUS
            : e === "closeFriends"
              ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE
                  .CLOSE_SHARING
              : e === "externalShare"
                ? o("WAWebWamEnumTopBarAttributionType")
                    .TOP_BAR_ATTRIBUTION_TYPE.CROSSPOSTING
                : e === "newsletterStatus"
                  ? o("WAWebWamEnumTopBarAttributionType")
                      .TOP_BAR_ATTRIBUTION_TYPE.CHANNEL_STATUS
                  : e === "paidPartnership"
                    ? u(!1, "paidPartnership attribution is not tappable")
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    function b(e, t) {
      return e
        ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS
        : t
          ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.CHANNEL_STATUS
          : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS;
    }
    function v(e, t, n) {
      new (o("WAWebStatusViewerActionWamEvent").StatusViewerActionWamEvent)({
        viewerActionType: o("WAWebWamEnumStatusViewActionType")
          .STATUS_VIEW_ACTION_TYPE.ATTRIBUTION_TAPPED,
        attributionType: C(e),
        statusCategory: b(t, n),
      }).commit();
    }
    function S(e, t) {
      var n = f(0),
        r = n[0],
        a = n[1],
        i = o(
          "WAWebStatusGatingUtils",
        ).isStatusCrosspostingAttributionsEnabled();
      return (
        p(
          function () {
            if (!(!i || e <= 1 || !t)) {
              var n = window.setInterval(function () {
                a(function (e) {
                  return e + 1;
                });
              }, h);
              return function () {
                window.clearInterval(n);
              };
            }
          },
          [e, t, i],
        ),
        e === 0 ? 0 : r % e
      );
    }
    function R(e) {
      var t = e.durationInSeconds,
        n = e.playing,
        r = f(t),
        a = r[0],
        i = r[1],
        l = _(null),
        s = _(0),
        u = _(t);
      return (
        p(
          function () {
            u.current = t;
          },
          [t],
        ),
        p(
          function () {
            if (!n) {
              var e = l.current;
              e != null &&
                ((s.current += (window.performance.now() - e) / 1e3),
                (l.current = null));
              return;
            }
            l.current = window.performance.now();
            var t,
              r = function () {
                var e = l.current;
                if (e != null) {
                  var n = s.current + (window.performance.now() - e) / 1e3;
                  i(Math.max(0, u.current - n));
                }
                t = window.requestAnimationFrame(r);
              };
            return (
              (t = window.requestAnimationFrame(r)),
              function () {
                window.cancelAnimationFrame(t);
              }
            );
          },
          [n],
        ),
        d.jsx("span", {
          children: o("WAWebStatusExternalShareUtils").formatDuration(
            Math.round(a),
          ),
        })
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(t) {
      var n,
        a = t.msg,
        i = t.onClickProfile,
        l = t.onDialogDismiss,
        u = t.onDialogOpen,
        c = t.onMentionsClick,
        m = t.playing,
        p = t.status,
        _ = t.statusMediaController,
        f = t.xstyle,
        h = p.contact,
        C = o("useWAWebMsgValues").useMsgValues(a.id, [
          (n = o("WAWebMsgGetters")).getFirstMusicAnnotationEmbeddedContent,
          n.getStatusMentioned,
          n.getIsGroupStatus,
          n.getIsNewsletterStatus,
          n.getIsSentByMe,
          n.getHasPaidPartnershipLabel,
        ]),
        b = C[0],
        L = C[1],
        E = C[2],
        k = C[3],
        I = C[4],
        T = C[5],
        D = o("WAWebContactCollection").ContactCollection.get(a.author),
        x = !0;
      E && D != null && o("WAWebContactGetters").getIsMe(D) && (x = !1);
      var $ = o("WAWebStatusExternalShareUtils").getExternalShareInfo(a),
        P = [];
      if (
        (T === !0 &&
          o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled() &&
          (P.push({
            type: "paidPartnership",
            content: s._(/*BTDS*/ "Paid partnership"),
            onClick: null,
            icon: d.jsx(
              o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon,
              { width: 14, height: 14 },
            ),
          }),
          (x = !1)),
        b != null &&
          P.push({
            type: "music",
            content: d.jsx(
              o("WAWebMusicStatusAttribution.react").MusicAttribution,
              { musicMetadata: b, msg: a, playing: m },
            ),
            onClick: function () {
              return o(
                "WAWebMusicStatusAttribution.react",
              ).showMusicStatusAttributionModal(b, a, _);
            },
            icon: null,
          }),
        L === !0 &&
          o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled() &&
          P.push({
            type: "mention",
            content: s._(/*BTDS*/ "Mentioned privately"),
            onClick: c,
            icon: d.jsx(
              o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon,
              { width: 14, height: 14 },
            ),
          }),
        E && D != null)
      ) {
        var N = o("WAWebContactGetters").getIsMe(D),
          M = N ? "You" : o("WAWebFrontendContactGetters").getFormattedName(D);
        P.push({
          type: "groupStatus",
          content: s._(/*BTDS*/ "Added by {Author Name}", [
            s._param("Author Name", M),
          ]),
          onClick: function () {
            i(D.id);
          },
          icon: null,
        });
      }
      var w = a.statusAudienceMetadata;
      if (
        w != null &&
        o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled()
      ) {
        var A,
          F,
          O = (A = w.listName) != null ? A : s._(/*BTDS*/ "Close friends"),
          B = (F = w.listEmoji) != null ? F : "\u2B50";
        (P.push({
          type: "closeFriends",
          content: s._(/*BTDS*/ "{List Name}", [s._param("List Name", O)]),
          onClick: function () {
            (u == null || u(),
              o("WAWebStatusCloseFriendsDialog.react").showCloseFriendsDialog(
                h == null ? void 0 : h.id,
                h != null
                  ? o("WAWebFrontendContactGetters").getFormattedName(h)
                  : "",
                B,
                O,
                I,
                function () {
                  l == null || l();
                },
              ));
          },
          icon: null,
        }),
          (x = !0));
      }
      if ($ != null) {
        var W = $.durationInSeconds;
        P.push({
          type: "externalShare",
          content: d.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "start",
            children: [
              d.jsx(o("WAWebFlex.react").FlexItem, {
                align: "center",
                grow: 0,
                shrink: 0,
                children: $.displayText,
              }),
              $.source ===
                o("WAWebProtobufsStatusAttributions.pb")
                  .StatusAttribution$ExternalShare$Source.INSTAGRAM &&
                W != null &&
                W !== 0 &&
                d.jsxs(o("WAWebFlex.react").FlexRow, {
                  children: [
                    d.jsx(o("WAWebFlex.react").FlexItem, {
                      className: "x1wbi8v6 x7g7pl8",
                      children: "\u2022",
                    }),
                    d.jsx(R, { durationInSeconds: W, playing: m }),
                  ],
                }),
            ],
          }),
          onClick: function () {
            o("WAWebExternalLink.react").openExternalLink($.url);
          },
          icon: o("WAWebStatusExternalShareUtils").getExternalShareIcon(
            $.source,
          ),
        });
      }
      k &&
        o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled() &&
        (P.push({
          type: "newsletterStatus",
          content: s._(/*BTDS*/ "Channel status"),
          onClick: null,
          icon: d.jsx(r("WDSIconWdsIcChannels.react"), {
            width: 14,
            height: 14,
          }),
        }),
        (x = !1));
      var q = P.slice(0, y),
        U = S(q.length, m);
      if (h != null && o("WAWebContactGetters").getIsPSA(h)) return null;
      if (
        a.forwardedNewsletterMessageInfo != null &&
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterLinksOnStatusConsumptionEnabled()
      )
        return d.jsx(r("WAWebStatusNewsletterCTA.react"), {
          msg: a,
          xstyle: [g.statusMeta, f],
        });
      var V = q.length > 0 ? q[U] : null;
      return d.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "start",
        className: (e || (e = r("stylex")))([f]),
        children: [
          d.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            grow: 0,
            shrink: 0,
            children: d.jsx("div", {
              className: "x78zum5 x6s0dn4",
              children: d.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "persistentAlwaysWhite",
                maxLines: 1,
                children: o("WAWebClock").Clock.relativeDateAndTimeStr(a.t),
              }),
            }),
          }),
          V != null &&
            d.jsx("span", {
              className: "x17t9dm2 xeuugli",
              children: d.jsx(r("WAWebStatusSubtitleAttribution.react"), {
                onClick:
                  V.onClick != null
                    ? function (e) {
                        (v(V.type, E, k), V.onClick == null || V.onClick(e));
                      }
                    : null,
                icon: V.icon,
                enableChevronIcon: x && V.type !== "music",
                children: V.content,
              }),
            }),
        ],
      });
    }
    ((L.displayName = L.name + " [from " + i.id + "]"), (l.default = L));
  },
  226,
);
