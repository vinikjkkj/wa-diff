__d(
  "WAWebAboutEditModal.react",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWeb-moment",
    "WAWebAboutDailyUtils",
    "WAWebAboutPrompts",
    "WAWebAboutWamLogger",
    "WAWebApiPrivacyDisallowedList",
    "WAWebClickable.react",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebContactStatusBridge",
    "WAWebDateInput.react",
    "WAWebDivider.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEphemeralAboutDurationsUtils",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPrivacySettings",
    "WAWebPrivacyVisibilityEditDrawer.react",
    "WAWebSelect.react",
    "WAWebSelectContactsExceptModal.react",
    "WAWebSelectMenuItem.react",
    "WAWebStatusClockIcon.react",
    "WAWebTextStatusAction",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebTimeInput.react",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWebIcCheckIcon.react",
    "WDSButton.react",
    "WDSIconIcCheck.react",
    "WDSIconIcChevronRight.react",
    "WDSIconIcClose.react",
    "WDSIconIcDelete.react",
    "WDSIconIcLock.react",
    "WDSIconIcMood.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSText.react",
    "WDSTextField.react",
    "asyncToGeneratorRuntime",
    "fbs",
    "react",
    "useWAWebContactValues",
    "useWAWebFlow",
    "useWAWebUnmountSignal",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useEffect,
      g = _.useRef,
      h = _.useState,
      y = n("$InternalEnum")({
        Edit: "edit",
        Privacy: "privacy",
        ContactsExcept: "contacts_except",
      }),
      C = 50,
      b = [
        {
          emoji: "\uD83D\uDFE2",
          text: r("fbs")._(/*BTDS*/ "Free to chat").toString(),
        },
        {
          emoji: "\u23F0",
          text: r("fbs")._(/*BTDS*/ "Slow to respond").toString(),
        },
        {
          emoji: "\uD83E\uDD23",
          text: r("fbs")._(/*BTDS*/ "Hanging with friends").toString(),
        },
        {
          emoji: "\u2708\uFE0F",
          text: r("fbs")._(/*BTDS*/ "Traveling").toString(),
        },
        {
          emoji: "\uD83D\uDD25",
          text: r("fbs")._(/*BTDS*/ "Excited!").toString(),
        },
      ],
      v = b.length,
      S = [
        o("WAWebAboutWamLogger").PRESET_TYPE.FREE_TO_CHAT,
        o("WAWebAboutWamLogger").PRESET_TYPE.SLOW_TO_RESPOND,
        o("WAWebAboutWamLogger").PRESET_TYPE.HANGING_WITH_FRIENDS,
        o("WAWebAboutWamLogger").PRESET_TYPE.TRAVELING,
        o("WAWebAboutWamLogger").PRESET_TYPE.EXCITED,
      ],
      R = {
        textEmojiContainer: { width: "xh8yej3", $$css: !0 },
        moodIcon: { color: "x1v5yvga", $$css: !0 },
        grayColor: { color: "xhslqc4", $$css: !0 },
        timerIcon: {
          minWidth: "x1fns5xo",
          height: "x1vqgdyp",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          paddingInlineEnd: "x1uc92m",
          $$css: !0,
        },
        paddingTop: { paddingTop: "x1sk1jro", $$css: !0 },
        customDateTimeRow: {
          paddingInlineStart: "x1g7keqi",
          paddingTop: "x1p57kb1",
          $$css: !0,
        },
        privacyIcon: {
          minWidth: "x1fns5xo",
          height: "x1vqgdyp",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        privacyChevron: { flexShrink: "x2lah0s", color: "xo1mcw5", $$css: !0 },
      };
    function L(e) {
      var t = e.emoji,
        n = e.onSave,
        a,
        i = h(!1),
        l = i[0],
        s = i[1],
        u = g(),
        c = function () {
          s(!0);
        };
      if (t != null) {
        var d = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(t);
        d != null &&
          (a = p.jsx(r("WAWebEmoji.react"), { emoji: d }, "low-res"));
      }
      return p.jsxs("div", {
        className: "x1uc92m xdqhqc9",
        children: [
          p.jsx("button", {
            className:
              "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp xyi3aci xwf5gio x1p453bz x1suzm8a xnj1f2r x2uibgs xkveyfu x12llq9 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xjbqb8w x1ypdohk",
            onClick: c,
            ref: u,
            children:
              a || p.jsx(r("WDSIconIcMood.react"), { xstyle: R.moodIcon }),
          }),
          l &&
            p.jsx(
              o("WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react")
                .EmojiPanelPopup,
              {
                anchorRef: u,
                onClose: function () {
                  s(!1);
                },
                onSelect: function (t) {
                  (n(t), s(!1));
                },
              },
            ),
        ],
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.onClear,
        n = e.onSave,
        a = e.promptKey,
        i = e.text,
        l = h(function () {
          return a != null
            ? o("WAWebAboutPrompts").getAboutPromptText(a)
            : o("WAWebAboutPrompts").getRandomAboutPrompt();
        }),
        s = l[0],
        u = function (t) {
          n(t);
        };
      return p.jsx("div", {
        className: "xh8yej3",
        children: p.jsx(r("WDSTextField.react"), {
          EndIcon: r("WDSIconIcClose.react"),
          label: s,
          value: i != null ? i : "",
          onEndIconClick: t,
          onValueChange: u,
          maxCharacterCount: C,
          testid: void 0,
        }),
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t,
        a = e.onClick,
        i = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
        l =
          (t = i.about) != null ? t : o("WAWebPrivacySettings").VISIBILITY.all,
        u = h(0),
        c = u[0],
        d = u[1];
      f(
        function () {
          if (l === o("WAWebPrivacySettings").VISIBILITY.contact_blacklist) {
            var e = !1;
            return (
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield o(
                  "WAWebApiPrivacyDisallowedList",
                ).queryDisallowedLists();
                if (!e) {
                  var n, r;
                  d(
                    (n =
                      (r = t.about) == null
                        ? void 0
                        : r.disallowedList.length) != null
                      ? n
                      : 0,
                  );
                }
              })(),
              function () {
                e = !0;
              }
            );
          }
        },
        [l],
      );
      var m =
          l === o("WAWebPrivacySettings").VISIBILITY.all
            ? s._(/*BTDS*/ "Everyone")
            : l === o("WAWebPrivacySettings").VISIBILITY.contacts
              ? s._(/*BTDS*/ "My contacts")
              : l === o("WAWebPrivacySettings").VISIBILITY.contact_blacklist
                ? s._(/*BTDS*/ "My contacts except {excluded_count}", [
                    s._param("excluded_count", c),
                  ])
                : l === o("WAWebPrivacySettings").VISIBILITY.none
                  ? s._(/*BTDS*/ "Nobody")
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          l,
                      );
                    })(),
        _ = p.jsxs("span", {
          className: "x3nfvp2 x6s0dn4",
          children: [
            p.jsx(r("WDSText.react"), {
              type: "Body3Emphasized",
              colorName: "contentActionEmphasized",
              children: m,
            }),
            p.jsx(r("WDSIconIcChevronRight.react"), {
              height: 20,
              width: 20,
              xstyle: R.privacyChevron,
            }),
          ],
        });
      return p.jsx(o("WAWebClickable.react").Clickable, {
        onClick: a,
        children: p.jsxs("div", {
          className: "x78zum5 x6s0dn4 x1tiyuxx x1nxh6w3 xhslqc4",
          "data-testid": void 0,
          children: [
            p.jsx(r("WDSIconIcLock.react"), {
              iconXstyle: R.grayColor,
              xstyle: R.privacyIcon,
            }),
            p.jsx("span", {
              children: s._(/*BTDS*/ "Visible in chats to: {privacy_setting}", [
                s._param("privacy_setting", _),
              ]),
            }),
          ],
        }),
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    var I = "custom",
      T = 30,
      D = function () {
        var e = r("WAWeb-moment")().format("YYYY-MM-DD"),
          t = r("WAWeb-moment")().add(T, "days").format("YYYY-MM-DD");
        return [e, t];
      };
    function x(e, t) {
      var n = r("WAWeb-moment")(e + " " + t);
      return Math.max(0, n.diff(r("WAWeb-moment")(), "seconds"));
    }
    function $(e) {
      var t = e.duration,
        n = e.onSave,
        a = o(
          "WAWebEphemeralAboutDurationsUtils",
        ).getTextStatusEphemeralityDurations(),
        i = h(!1),
        l = i[0],
        u = i[1],
        c = h(function () {
          return r("WAWeb-moment")().add(1, "day").format("YYYY-MM-DD");
        }),
        d = c[0],
        m = c[1],
        _ = h(function () {
          return r("WAWeb-moment")().format("HH:mm");
        }),
        f = _[0],
        g = _[1],
        y = function (t) {
          t === I ? (u(!0), n(x(d, f))) : (u(!1), n(Number(t)));
        },
        C = function (t) {
          (m(t), n(x(t, f)));
        },
        b = function (t) {
          (g(t), n(x(d, t)));
        };
      return p.jsxs(p.Fragment, {
        children: [
          p.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: R.paddingTop,
            children: [
              p.jsx(o("WAWebStatusClockIcon.react").StatusClockIcon, {
                iconXstyle: R.grayColor,
                xstyle: R.timerIcon,
              }),
              p.jsxs(o("WAWebSelect.react").Select, {
                defaultLabel: s._(/*BTDS*/ "Select expiry duration"),
                initialSelection: t.toString(),
                label: s._(/*BTDS*/ "Duration"),
                onChange: y,
                testid: void 0,
                theme: "about-20-screen",
                width: "100%",
                children: [
                  a.map(function (e) {
                    return p.jsx(
                      o("WAWebSelectMenuItem.react").SelectMenuItem,
                      { optionId: "" + e.value, primary: e.label.toString() },
                      "duration-" + e.value,
                    );
                  }),
                  p.jsx(r("WAWebDropdownItemSeparator.react"), {}),
                  p.jsx(
                    o("WAWebSelectMenuItem.react").SelectMenuItem,
                    { optionId: I, primary: s._(/*BTDS*/ "Custom").toString() },
                    "duration-custom",
                  ),
                ],
              }),
            ],
          }),
          l &&
            p.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: R.customDateTimeRow,
              dir: "ltr",
              columnGap: 8,
              children: [
                p.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  basis: 0,
                  children: p.jsx(o("WAWebDateInput.react").DateInput, {
                    name: "about-custom-date",
                    value: d,
                    onChange: C,
                    getDateBoundaries: D,
                    theme: "about",
                    label: s._(/*BTDS*/ "Date"),
                  }),
                }),
                p.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  basis: 0,
                  children: p.jsx(o("WAWebTimeInput.react").TimeInput, {
                    name: "about-custom-time",
                    value: f,
                    onChange: b,
                    theme: "about",
                    label: s._(/*BTDS*/ "Time"),
                  }),
                }),
              ],
            }),
          !l &&
            p.jsx("div", {
              className: "x16zwnhg x16ovd2e",
              "data-testid": void 0,
              children: p.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: o("WAWebClock").Clock.textStatusExpiryStr(
                  o("WATimeUtils").castToUnixTime(
                    o("WATimeUtils").unixTime() + t,
                  ),
                ),
              }),
            }),
        ],
      });
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t = e.emojiKey,
        n = e.isDeletable,
        a = e.onDelete,
        i = e.onSelect,
        l = e.textVal,
        u = g(null),
        c = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(
          t != null ? t : "",
        ),
        d = p.jsxs(r("WDSMenu.react"), {
          children: [
            p.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcCheck.react"),
              title: s._(/*BTDS*/ "Select"),
              onPress: i,
              testid: void 0,
            }),
            n === !0 &&
              p.jsx(r("WDSMenuItem.react"), {
                Icon: r("WDSIconIcDelete.react"),
                title: s._(/*BTDS*/ "Delete"),
                onPress: a,
                destructive: !0,
                testid: void 0,
              }),
          ],
        }),
        m = r("useWDSMenu")({
          targetRef: u,
          menu: d,
          contextMenuArea: !0,
          enableUIM: !1,
        }),
        _ = m.menuPortal,
        f = m.openMenu,
        h = function (t) {
          (t.preventDefault(), t.stopPropagation(), f(t));
        };
      return p.jsxs("div", {
        ref: u,
        className: "x78zum5 x6s0dn4 x1qughib x1ypdohk x16ovd2e xb0esv5 xs723ss",
        onClick: i,
        onContextMenu: h,
        onKeyDown: function (t) {
          t.key === "Enter" && i();
        },
        role: "button",
        tabIndex: 0,
        children: [
          p.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [
              p.jsx("div", {
                className: "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x2lah0s",
                children:
                  c != null
                    ? p.jsx(r("WAWebEmoji.react"), { emoji: c }, "low-res")
                    : p.jsx(r("WDSIconIcMood.react"), {
                        height: 20,
                        width: 20,
                        xstyle: R.moodIcon,
                      }),
              }),
              p.jsx("span", { className: "x12w63v0", children: l }),
            ],
          }),
          _,
        ],
      });
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N(e) {
      var t = e.handleDeleteSuggestion,
        n = e.onSave,
        o = e.suggestions,
        a = o.length > v;
      return p.jsxs("div", {
        className: "x1xrf6ya",
        children: [
          p.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
          p.jsx("div", {
            className: "x2gs1ea x1odjw0f",
            children: o.map(function (e, o) {
              var i = e.emoji,
                l = e.text;
              return p.jsxs(
                p.Fragment,
                {
                  children: [
                    o === v &&
                      a &&
                      p.jsx("div", {
                        className: "x16ovd2e x12xbjc7",
                        children: p.jsx(r("WAWebDivider.react"), {
                          direction: "horizontal",
                        }),
                      }),
                    p.jsx(P, {
                      emojiKey: i,
                      isDeletable: o >= v,
                      textVal: l,
                      onSelect: function () {
                        return n(i, l);
                      },
                      onDelete: function () {
                        t(o);
                      },
                    }),
                  ],
                },
                o,
              );
            }),
          }),
        ],
      });
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M(t) {
      var a,
        i,
        l,
        m,
        _,
        C = h(function () {
          return (
            o("WAWebAboutDailyUtils").incrementAboutCreationVisit(),
            Date.now()
          );
        }),
        I = C[0],
        T = g(!1),
        D = r("useWAWebUnmountSignal")(),
        x = h([]),
        P = x[0],
        M = x[1],
        w = function (t) {
          if (t == null || t.length === 0) {
            M(b);
            return;
          }
          var e = new Set(
              b.map(function (e) {
                var t, n;
                return (
                  ((t = e.emoji) != null ? t : "") +
                  "|" +
                  ((n = e.text) != null ? n : "")
                );
              }),
            ),
            n = t.filter(function (t) {
              var n,
                r,
                o =
                  ((n = t.emoji) != null ? n : "") +
                  "|" +
                  ((r = t.text) != null ? r : "");
              return e.has(o) ? !1 : (e.add(o), !0);
            });
          M([].concat(b, n));
        },
        A = o("WAWebUserPrefsMeUser").getMeUser(),
        F = o("WAWebContactCollection").ContactCollection.assertGet(A),
        O = o("useWAWebContactValues").useContactValues(F.id, [
          (_ = o("WAWebFrontendContactGetters")).getTextStatusString,
          _.getTextStatusEmoji,
          _.getTextStatusEphemeralDuration,
          _.getTextStatusExpiryTs,
          _.getTextStatusLastUpdateTime,
        ]),
        B = O[0],
        W = O[1],
        q = O[2],
        U = O[3],
        V = O[4],
        H = o("WAWebTextStatusUtils").hasTextStatusSet(B, W, V, U, q),
        G = h(H ? B : null),
        z = G[0],
        j = G[1],
        K = h(H ? W : null),
        Q = K[0],
        X = K[1],
        Y = o(
          "WAWebEphemeralAboutDurationsUtils",
        ).getTextStatusEphemeralityDurations(),
        J = Y.find(function (e) {
          return e.value === q;
        }),
        Z = h(
          (a = J == null ? void 0 : J.value) != null
            ? a
            : o("WAWebEphemeralAboutDurationsUtils")
                .defaultTextStatusEphemeralDuration,
        ),
        ee = Z[0],
        te = Z[1];
      f(
        function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              !(
                !o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() ||
                D.aborted
              )
            ) {
              var e = yield o("WAWebTextStatusAction").getSuggestions();
              D.aborted || w(e);
            }
          })();
        },
        [D.aborted],
      );
      var ne = o("useWAWebFlow").useFlow(y.Edit, {
          transitions: o("useWAWebFlow").FlowTransitions.None,
          onEnd: function () {
            return o("WAWebModalManager").ModalManager.close();
          },
        }),
        re = ne[1],
        oe = g(null),
        ae = re.step;
      if (ae == null) return null;
      var ie = function () {
          T.current ||
            ((T.current = !0),
            o("WAWebAboutDailyUtils").incrementAboutCreationStarted());
        },
        le = function (t) {
          (ie(), j(t));
        },
        se = function (t) {
          (ie(), X(t));
        },
        ue = function () {
          (j(null), X(null));
        },
        ce = function (t) {
          te(t);
        },
        de = function () {
          return P == null
            ? void 0
            : P.some(function (e) {
                return e.emoji === Q && e.text === z;
              });
        },
        me = function () {
          var e =
            P == null
              ? void 0
              : P.findIndex(function (e) {
                  return e.emoji === Q && e.text === z;
                });
          if (e != null && e >= 0 && e < v) return S[e];
        },
        pe = function (t, n) {
          (ie(), X(t), j(n));
        },
        _e = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        fe = (function () {
          var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n,
              r = z != null && z.trim() ? z : null;
            if (r === B && Q === W && ee === q) {
              _e();
              return;
            }
            try {
              yield o("WAWebTextStatusAction").setMyTextStatus(r, Q, ee);
            } catch (t) {
              (o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleSave] failed to save About status: ",
                    "",
                  ])),
                t,
              ),
                o("WAWebAboutDailyUtils").incrementAboutFailure());
              return;
            }
            try {
              var a = [Q, r].filter(Boolean).join(" ");
              if (
                (yield o("WAWebContactStatusBridge").setMyStatus(a),
                (r || Q) && !de())
              ) {
                var i = (P != null ? P : []).slice(v);
                yield o("WAWebTextStatusAction").setSuggestions(
                  [{ emoji: Q, text: r }].concat(i),
                );
              }
            } catch (e) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleSave] secondary operations failed: ",
                    "",
                  ])),
                e,
              );
            }
            var l = (r == null || r === "") && Q == null,
              s;
            (l
              ? (s = o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE.CLEAR_EXISTING)
              : H
                ? (s = o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE
                    .UPDATE_EXISTING)
                : (s = o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE.CREATE_NEW),
              o("WAWebAboutWamLogger").logAboutCreation({
                aboutDuration: ee,
                aboutEntrypoint: t.entrypoint,
                aboutLength:
                  (n = r == null ? void 0 : r.length) != null ? n : 0,
                aboutOverallT: Math.round((Date.now() - I) / 1e3),
                aboutPresetSelected: de(),
                aboutPromptKey: t.promptKey,
                aboutRequestType: s,
                preset: me(),
              }),
              o("WAWebAboutDailyUtils").incrementAboutSuccess(),
              _e());
          });
          return function () {
            return r.apply(this, arguments);
          };
        })(),
        ge = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (!(e == null || P == null)) {
              var t = [].concat(P);
              t.splice(e, 1);
              try {
                var n = t.slice(v);
                (yield o("WAWebTextStatusAction").setSuggestions(n), w(n));
              } catch (e) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[handleDeleteSuggestion] failed to update suggestions",
                    ])),
                );
              }
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        he = s._(/*BTDS*/ "About"),
        ye = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              (yield o("WAWebTextStatusAction").setMyTextStatus(null, null, ee),
                yield o("WAWebContactStatusBridge").setMyStatus(""));
            } catch (e) {
              (o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleDelete] failed to clear About status: ",
                    "",
                  ])),
                e,
              ),
                o("WAWebAboutDailyUtils").incrementAboutFailure());
              return;
            }
            (o("WAWebAboutWamLogger").logAboutCreation({
              aboutDuration: ee,
              aboutEntrypoint: t.entrypoint,
              aboutLength: 0,
              aboutOverallT: Math.round((Date.now() - I) / 1e3),
              aboutPresetSelected: !1,
              aboutRequestType: o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE
                .CLEAR_EXISTING,
            }),
              o("WAWebAboutDailyUtils").incrementAboutSuccess(),
              _e());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Ce = function () {
          ye();
        },
        be = function () {
          fe();
        },
        ve = (i = H ? B : null) != null ? i : null,
        Se = (l = H ? W : null) != null ? l : null,
        Re =
          (m = J == null ? void 0 : J.value) != null
            ? m
            : o("WAWebEphemeralAboutDurationsUtils")
                .defaultTextStatusEphemeralDuration,
        Le = z != null && z.trim() ? z : null,
        Ee = Le === ve && (Q != null ? Q : null) === Se && ee === Re,
        ke = Ee || (!!Q && !Le);
      return ae === y.Edit
        ? p.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.EditAbout,
            children: p.jsxs("div", {
              className: "x1280gxy",
              children: [
                p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  title: he,
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                  onCancel: _e,
                }),
                p.jsxs(r("WAWebDrawerBody.react"), {
                  theme: "padding",
                  children: [
                    p.jsxs("div", {
                      className: "xb0esv5 xyo0t3i",
                      children: [
                        p.jsxs(o("WAWebFlex.react").FlexRow, {
                          align: "center",
                          xstyle: R.textEmojiContainer,
                          children: [
                            p.jsx(L, { emoji: Q, onSave: se }),
                            p.jsx(E, {
                              onClear: ue,
                              onSave: le,
                              promptKey: t.promptKey,
                              text: z,
                            }),
                          ],
                        }),
                        p.jsx(k, {
                          onClick: function () {
                            return re.push(y.Privacy);
                          },
                        }),
                        p.jsx($, { duration: ee, onSave: ce }),
                      ],
                    }),
                    p.jsx(N, {
                      handleDeleteSuggestion: ge,
                      onSave: pe,
                      suggestions: P,
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className:
                    "x78zum5 x6s0dn4 x1p57kb1 xvpt6g3 xvtqlqk x1m4z3lf x1od0jb8",
                  children: [
                    H &&
                      p.jsx(o("WAWebClickable.react").Clickable, {
                        ariaLabel: s._(/*BTDS*/ "Delete"),
                        onClick: Ce,
                        children: p.jsx(r("WDSIconIcDelete.react"), {
                          xstyle: R.grayColor,
                        }),
                      }),
                    p.jsx("div", {
                      className: "xvc5jky",
                      children: p.jsx(r("WDSButton.react"), {
                        variant: "filled",
                        size: "medium",
                        type: "default",
                        Icon: o("WAWebWebIcCheckIcon.react").WebIcCheckIcon,
                        disabled: ke,
                        onPress: be,
                        testid: void 0,
                        "aria-label": s._(/*BTDS*/ "Save"),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        : ae === y.Privacy
          ? p.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.EditAbout,
              children: p.jsx("div", {
                className: "x1n2onr6 x16nrsnc",
                children: p.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
                  category: "about",
                  onClose: function () {
                    return re.pop();
                  },
                  onOpenContactsExceptModal: function (t) {
                    ((oe.current = t), re.push(y.ContactsExcept));
                  },
                }),
              }),
            })
          : ae === y.ContactsExcept
            ? p.jsx(r("WAWebSelectContactsExceptModal.react"), {
                category: "about",
                onConfirm: function () {
                  oe.current == null || oe.current();
                },
                onBack: function () {
                  return re.pop();
                },
              })
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    ae,
                );
              })();
    }
    ((M.displayName = M.name + " [from " + i.id + "]"), (l.default = M));
  },
  226,
);
