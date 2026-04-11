__d(
  "WAWebNewsletterContactsReactionList.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebBizGatingUtils",
    "WAWebCellFrame.react",
    "WAWebCmd",
    "WAWebCommonNewsletterStrings",
    "WAWebEmptyState.react",
    "WAWebFindChatAction",
    "WAWebFlatList.react",
    "WAWebFlex.react",
    "WAWebName.react",
    "WAWebReactionCellDetailThumb.react",
    "WAWebText.react",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        reactionCellImage: { width: "x1guw455", height: "xdd8jsf", $$css: !0 },
        paddingStart2: { paddingInlineStart: "x4tra6z", $$css: !0 },
        paddingEnd12: { paddingInlineEnd: "xde1mab", $$css: !0 },
        paddingStart16: { paddingInlineStart: "xdx6fka", $$css: !0 },
        paddingEnd16: { paddingInlineEnd: "xvtqlqk", $$css: !0 },
        paddingVert40: {
          paddingTop: "x14a8spa",
          paddingBottom: "x1c76a8b",
          $$css: !0,
        },
        paddingBottom8: { paddingBottom: "x12xbjc7", $$css: !0 },
        paddingTop8: { paddingTop: "x16ovd2e", $$css: !0 },
        paddingBottom16: { paddingBottom: "xvpt6g3", $$css: !0 },
      },
      d = 52,
      m = o("WAWebABProps").getABPropConfigValue("wa_web_reactions_2");
    function p(e) {
      var t = e.contact,
        a = e.onCloseDetailsPane,
        i = e.reaction,
        l = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = o("WAWebWidFactory").asUserWidOrThrow(t.id),
              n = e.isLid() ? o("WAWebApiContact").getPhoneNumber(e) : null;
            if (n != null) {
              var r = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                  n,
                  "reactionDetailsPane",
                ),
                i = r.chat;
              (o("WAWebCmd").Cmd.chatInfoDrawer(i), a());
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsx(r("WAWebCellFrame.react"), {
        primary: u.jsx(o("WAWebName.react").Name, {
          contact: t,
          titlify: !0,
          ellipsify: !0,
          showLabelIcon: o("WAWebBizGatingUtils").canDisplayLabel(),
        }),
        image: u.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "start",
          xstyle: m
            ? [c.reactionCellImage, c.paddingStart2, c.paddingEnd12]
            : [c.reactionCellImage, c.paddingStart16, c.paddingEnd16],
          children: u.jsx(
            o("WAWebReactionCellDetailThumb.react")
              .ReactionCellProfileImageThumb,
            { profileImageId: t.id, reactionText: i },
          ),
        }),
        theme: "newsletter-reaction-by-contact",
        customImage: !0,
        onClick: l,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.flatListController,
        n = e.isOffline,
        r = e.onCloseDetailsPane,
        a = e.reactionList,
        i = e.reactionSendersServerError,
        l = e.retryFetchingReactionSenders,
        _ = e.setReactionSendersServerError,
        f = a.map(function (e) {
          var t = e.contact,
            n = e.reaction;
          return {
            itemKey: t.id.toJid(),
            contentKey: t.id.toJid(),
            contact: t,
            reaction: n,
            height: d,
          };
        }),
        g = u.jsx("div", {
          className:
            "xx42vgk x13fuv20 x178xt8z x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
          children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
            color: "secondary",
            children: o(
              "WAWebCommonNewsletterStrings",
            ).getIndividualReactionsFromContactsText(),
          }),
        }),
        h = u.jsx("div", {
          className:
            "x9f619 xh8yej3 x2b8uid x1p57kb1 x1ci70gm x1m4z3lf x1evaxtz",
          children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
            color: "secondary",
            children: o(
              "WAWebCommonNewsletterStrings",
            ).getNoContactsHaveReactedYetText(),
          }),
        });
      return n
        ? u.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
            text: o(
              "WAWebCommonNewsletterStrings",
            ).getNoInternetConnectionText(),
            onClick: l,
            center: !0,
            xstyle: c.paddingVert40,
          })
        : i
          ? u.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
              text: s._(
                /*BTDS*/ "Reactions didn't load. Please try again later.",
              ),
              onClick: function () {
                (_(!1), l());
              },
              center: !0,
              xstyle: c.paddingVert40,
            })
          : u.jsxs(u.Fragment, {
              children: [
                a.length > 0
                  ? u.jsx(o("WAWebFlatList.react").FlatList, {
                      data: f,
                      direction: "vertical",
                      renderItem: function (t) {
                        return u.jsx(p, {
                          contact: t.contact,
                          reaction: t.reaction,
                          onCloseDetailsPane: r,
                        });
                      },
                      flatListController: t,
                      containerXstyles: m
                        ? [c.paddingBottom8, c.paddingTop8]
                        : [c.paddingBottom16],
                    })
                  : h,
                g,
              ],
            });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
