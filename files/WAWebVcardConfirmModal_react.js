__d(
  "WAWebVcardConfirmModal.react",
  [
    "fbt",
    "WAWebApiContact",
    "WAWebChatFlowTypes",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEmojiText.react",
    "WAWebFocusTracer",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendVcardUtils",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardTabUtils",
    "WAWebModal.react",
    "WAWebUsernameGatingUtils",
    "WAWebVcardModalDetails.react",
    "WAWebVcardParsingUtils",
    "WAWebWdsIcSendFilledIcon.react",
    "WAWebWidFactory",
    "WDSButton.react",
    "isStringNullOrEmpty",
    "react",
    "useMergeRefs",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState;
    function f(e) {
      var t = e.contact,
        n = e.options,
        a = e.setOptions,
        i = o("WAWebVcardParsingUtils").parseVcard(
          o("WAWebFrontendVcardUtils").vcardFromContactModel(t).vcard,
        );
      return i
        ? o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled()
          ? c.jsx("div", {
              className: "x1n2onr6 xyorhqc x1280gxy x1bnvlk4",
              children: c.jsx(r("WAWebVcardModalDetails.react"), {
                parsedVcard: i,
                thumbnail: o("WAWebVcardParsingUtils").vcardThumbnail(i),
                username: t.username,
                includePhoneNumber: n.includePhoneNumber,
                includeUsername: n.includeUsername,
                onTogglePhoneNumber: function () {
                  var e = babelHelpers.extends({}, n);
                  ((e.includePhoneNumber = !e.includePhoneNumber), a(e));
                },
                onToggleUsername: function () {
                  var e = babelHelpers.extends({}, n);
                  ((e.includeUsername = !e.includeUsername), a(e));
                },
              }),
            })
          : c.jsx("div", {
              className: "x1n2onr6 xyorhqc x1280gxy x1bnvlk4",
              children: c.jsx(r("WAWebVcardModalDetails.react"), {
                parsedVcard: i,
                thumbnail: o("WAWebVcardParsingUtils").vcardThumbnail(i),
                includePhoneNumber: n.includePhoneNumber,
                includeUsername: n.includeUsername,
              }),
            })
        : null;
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = p(null),
        l = r("useMergeRefs")(n, i),
        u = a.chat,
        d = a.contactList,
        g = a.onBack,
        h = a.onSend,
        y = _(function () {
          return d.map(function (e) {
            return {
              includePhoneNumber:
                e.id.isRegularUserPn() ||
                o("WAWebApiContact").getPhoneNumber(
                  o("WAWebWidFactory").asUserLidOrThrow(e.id),
                ) != null,
              includeUsername: !r("isStringNullOrEmpty")(
                o("WAWebFrontendContactGetters").getUsername(e),
              ),
            };
          });
        }),
        C = y[0],
        b = y[1];
      m(function () {
        var e = i.current;
        if (e != null) {
          var t = o("WAWebKeyboardTabUtils").getNextTabbableElement(
            e,
            o("WAWebKeyboardTabUtils").TabDirection.FORWARD,
            o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
          );
          t != null && r("WAWebFocusTracer").focus(t);
        }
      }, []);
      var v = o("useWAWebChatValues").useChatValues(u.id, [
          o("WAWebFrontendChatGetters").getKind,
        ]),
        S = v[0],
        R;
      if (S != null)
        switch (S) {
          case o("WAWebChatFlowTypes").ChatKindType.Chat:
            R = s._(
              /*BTDS*/ '_j{"*":"Send {count} contacts to \\"{chat}\\"?","_1":"Send 1 contact to \\"{chat}\\"?"}',
              [s._plural(d.length, "count"), s._param("chat", u.title())],
            );
            break;
          case o("WAWebChatFlowTypes").ChatKindType.Group:
            R = s._(
              /*BTDS*/ '_j{"*":"Send {count} contacts to \\"{chat}\\"?","_1":"Send 1 contact to \\"{chat}\\"?"}',
              [s._plural(d.length, "count"), s._param("chat", u.title())],
            );
            break;
          case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
            R = s._(
              /*BTDS*/ '_j{"*":"Send {count} contacts to \\"{chat}\\"?","_1":"Send 1 contact to \\"{chat}\\"?"}',
              [s._plural(d.length, "count"), s._param("chat", u.title())],
            );
            break;
          case o("WAWebChatFlowTypes").ChatKindType.Community:
          case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
            break;
        }
      var L =
          R != null
            ? c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: R,
                direction: "auto",
                titlify: !0,
                ellipsify: !0,
              })
            : null,
        E = C.some(function (e) {
          return !e.includePhoneNumber && !e.includeUsername;
        }),
        k = s._(/*BTDS*/ "Send contacts"),
        I = c.jsx("div", {
          className: "xvjzkt9 xh8yej3 x78zum5 x13a6bvl xwvwv9b x12xzxwr",
          children: c.jsx(r("WDSButton.react"), {
            size: "large",
            variant: "filled",
            Icon: o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
            disabled: E,
            "aria-label": k,
            onPress: function () {
              h(C);
            },
          }),
        });
      return c.jsx(o("WAWebModal.react").Modal, {
        ref: l,
        type: o("WAWebModal.react").ModalTheme.Box,
        children: c.jsxs(r("WAWebDrawer.react"), {
          tsNavigationData: { surface: "unknown", viewName: "vcard-confirm" },
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
              onBack: g,
              children: L,
            }),
            c.jsx(r("WAWebDrawerBody.react"), {
              children: c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                children: c.jsx("div", {
                  className: "x889kno",
                  children: d.map(function (e, t) {
                    var n = function (n) {
                      b(function (e) {
                        var r = [].concat(e);
                        return ((r[t] = n), r);
                      });
                    };
                    return c.jsx(
                      f,
                      { contact: e, options: C[t], setOptions: n },
                      t.toString(),
                    );
                  }),
                }),
              }),
            }),
            I,
          ],
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
