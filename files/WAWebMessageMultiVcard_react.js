__d(
  "WAWebMessageMultiVcard.react",
  [
    "fbt",
    "Promise",
    "WACommonTaskScheduler",
    "WAMemoizeOne",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebConfirmPopup.react",
    "WAWebContactEditUtils",
    "WAWebContactLogging",
    "WAWebDisplayType",
    "WAWebEmojiText.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageComponentContext.react",
    "WAWebMessageMeta.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMultiVcardModal.react",
    "WAWebProfileImage.react",
    "WAWebProfilePicThumbCollection",
    "WAWebQueryExistsJob",
    "WAWebUsernameGatingUtils",
    "WAWebVcardParsingUtils",
    "WAWebVcardUtils",
    "lodash",
    "react",
    "useLazyRef",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useEffect,
      f = d.useRef,
      g = d.useState,
      h = {
        name: {
          color: "x14ug900",
          fontSize: "x1f6kntn",
          fontWeight: "x1s688f",
          lineHeight: "x16h55sf",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        emoji: { verticalAlign: "xg49k01", $$css: !0 },
      },
      y = 3;
    function C(t) {
      var a,
        i = t.msg,
        l = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
          (a = o("WAWebFrontendMsgGetters")).getRtl,
          a.getDir,
          a.getSenderObj,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebMsgGetters").getIsGroupMsg,
        ]),
        u = l[0],
        d = l[1],
        C = l[2],
        b = l[3],
        R = l[4],
        L = a.getChat(i.unsafe()),
        E = g(!0),
        k = E[0],
        I = E[1],
        T = g(null),
        D = T[0],
        x = T[1],
        $ = g(t.vcardList),
        P = $[0],
        N = $[1],
        M = p(o("WAWebMessageComponentContext.react").MessageComponentContext),
        w = M.onSaveContact;
      r("lodash").isEqual(P, t.vcardList) || (N(t.vcardList), I(!0), x(null));
      var A = function (t) {
          w
            ? w(t)
            : o("WAWebContactEditUtils").openContactEditDrawer(
                t,
                o("WAWebContactLogging").ContactSourceType.VCard,
              );
        },
        F = function () {
          if (P) {
            var t = P.map(function (e) {
              return e.parsedVcard;
            });
            if (o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled()) {
              var a = t.map(function (e) {
                  return o("WAWebVcardParsingUtils").vcardLidWid(e);
                }),
                i = a.filter(function (e) {
                  return e != null;
                });
              (e || (e = n("Promise")))
                .all(
                  i.map(function (e) {
                    return o("WAWebQueryExistsJob")
                      .queryWidUsernameExists(e)
                      .then(function (t) {
                        return { wid: e, result: t };
                      });
                  }),
                )
                .then(function (e) {
                  var n = new Map(),
                    a = !1;
                  (e.forEach(function (e) {
                    var t = e.result,
                      r = e.wid,
                      o = t == null ? void 0 : t.username;
                    o != null ? n.set(r.toString(), o) : (a = !0);
                  }),
                    a
                      ? S()
                      : o("WAWebModalManager").ModalManager.open(
                          c.jsx(r("WAWebMultiVcardModal.react"), {
                            vcards: t,
                            onSaveContact: A,
                            usernames: n,
                          }),
                        ));
                });
            } else
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebMultiVcardModal.react"), {
                  vcards: t,
                  onSaveContact: A,
                }),
              );
          }
        },
        O = r("useLazyRef")(function () {
          return r("WAMemoizeOne")(function (e) {
            return e.vcardList.map(function (e) {
              var t = e.displayName,
                n = e.parsedVcard,
                r = o("WAWebVcardParsingUtils").vcardAllWids(n),
                a = o("WAWebVcardParsingUtils").vcardThumbnail(n);
              return { displayName: t, wids: r, thumbnail: a };
            });
          });
        }),
        B = m(
          function () {
            var e = O.current;
            return e({ vcardList: P });
          },
          [O, P],
        ),
        W = f(P);
      ((W.current = P),
        _(
          function () {
            var t,
              a = P,
              i = B(),
              l = (t = []).concat
                .apply(
                  t,
                  i.map(function (e) {
                    var t = e.wids;
                    return t;
                  }),
                )
                .slice(0, 10);
            (e || (e = n("Promise")))
              .all(
                l.map(function (e) {
                  return o(
                    "WAWebProfilePicThumbCollection",
                  ).ProfilePicThumbCollection.find(e);
                }),
              )
              .then(function () {
                return o("WAWebABProps").getABPropConfigValue(
                  "wmi_worker_scheduler_web",
                )
                  ? r("WACommonTaskScheduler").yield()
                  : o("WAPromiseDelays").releaseToEventLoop();
              })
              .then(function () {
                W.current === a && (I(!1), x(v(i)));
              });
          },
          [B, P],
        ));
      for (
        var q = o("WAWebDisplayType").isWideDisplay(t.displayType),
          U = t.displayAuthor
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className: "xso031l x1q0q8m5 x120ee7l xzueoph xs9asl8",
                    },
                    1: {
                      className: "xso031l x120ee7l xs9asl8 x1sy0etr xat24cr",
                    },
                  }[!!t.quotedMsg << 0],
                  {
                    children: c.jsx(r("WAWebMessageAuthor.react"), {
                      msg: i,
                      contact: C,
                      displayType: t.displayType,
                    }),
                  },
                ),
              )
            : null,
          V = D || B(),
          H = V.map(function (e) {
            var t = e.displayName;
            return t;
          }),
          G = o("WAWebVcardUtils").getNameStringFromNames(H),
          z = Math.min(V.length, y),
          j = [],
          K = 0;
        K < z;
        K++
      ) {
        var Q = V[K],
          X = Q.thumbnail,
          Y = Q.wids,
          J = o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.findThumbnailWid(Y),
          Z = {
            0: "x1n2onr6 x11uqc5h x1rg5ohu",
            2: "x1n2onr6 x1rg5ohu xeut3pp x14437wl",
            1: "x1n2onr6 x1rg5ohu xqqomq6 x14437wl",
            3: "x1n2onr6 x1rg5ohu xqqomq6 x14437wl",
          }[((K === 1) << 1) | ((K === 2) << 0)];
        !k && (J || X)
          ? j.push(
              c.jsx(
                "div",
                {
                  className: Z,
                  children: c.jsx(r("WAWebProfileImage.react"), {
                    wid: J,
                    thumb: X,
                    size: 39,
                    border: !0,
                  }),
                },
                "profile-pic-" + K,
              ),
            )
          : j.push(
              c.jsx(
                "div",
                {
                  className: Z,
                  children: c.jsx(r("WAWebProfileImage.react"), {
                    size: 39,
                    border: !0,
                  }),
                },
                "default-pic-" + K,
              ),
            );
      }
      var ee = P || L.isTrusted(),
        te = t.quotedMsg
          ? c.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: { className: "x1198e8h x1lxpwgx xwoyzhm xw01apr" },
                  1: { className: "x1lxpwgx xwoyzhm xw01apr xdj266r" },
                }[!!U << 0],
                { children: t.quotedMsg },
              ),
            )
          : null,
        ne = {
          0: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x1o095ql",
          4: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems xlkrthq xh8yej3",
          2: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x1yuel0x",
          6: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems xlkrthq x1yuel0x",
          1: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems xlkrthq xh8yej3",
          5: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems xlkrthq xh8yej3",
          3: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems xlkrthq xh8yej3",
          7: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems xlkrthq xh8yej3",
        }[
          ((t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO) <<
            2) |
            (!!q << 1) |
            ((t.displayType ===
              o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS ||
              t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ||
              t.displayType ===
                o("WAWebDisplayType").DISPLAY_TYPE.CONTACT_CARD) <<
              0)
        ];
      return c.jsxs("div", {
        className: ne,
        children: [
          U,
          te,
          c.jsxs("div", {
            className: "x1n2onr6 x78zum5 x6s0dn4 xng8ra xdzw4kq xqf2s3x",
            role: ee ? "button" : null,
            title: G,
            onClick: F,
            children: [
              c.jsx("div", {
                className: "x2lah0s x1c4vz4f xdl72j9 x1yh7se0",
                children: j,
              }),
              c.jsx("div", {
                className: "xs83m0k x1iyjqo2 xdl72j9 x18wx58x x6ikm8r x10wlt62",
                children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: G,
                  element: "div",
                  xstyle: h.name,
                  emojiXstyle: h.emoji,
                  dirMismatch: u !== r("WAWebL10N").isRTL(),
                  direction: d,
                  wbr: 15,
                }),
              }),
              c.jsx("div", {
                className: "x1o583il x10l6tqk x13niomq",
                children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: i }),
              }),
            ],
          }),
          c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [{ label: s._(/*BTDS*/ "View all"), onClick: F }],
          }),
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      return !!(
        o(
          "WAWebProfilePicThumbCollection",
        ).ProfilePicThumbCollection.findThumbnailWid(e.wids) || e.thumbnail
      );
    }
    function v(e) {
      return e.toSorted(function (e, t) {
        var n = b(e),
          r = b(t);
        return n && !r
          ? -1
          : !n && r
            ? 1
            : e.displayName.toString() < t.displayName.toString()
              ? -1
              : e.displayName.toString() > t.displayName.toString()
                ? 1
                : 0;
      });
    }
    var S = function () {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "multi-vcard" },
          onOK: function () {
            return o("WAWebModalManager").ModalManager.close();
          },
          children: s._(
            /*BTDS*/ "Unable to load contact information. Please try again later.",
          ),
        }),
      );
    };
    l.default = C;
  },
  226,
);
