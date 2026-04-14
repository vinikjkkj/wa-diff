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
    "useWAWebListener",
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
      f = _.useCallback,
      g = _.useEffect,
      h = _.useRef,
      y = _.useState,
      C = n("$InternalEnum")({
        Edit: "edit",
        Privacy: "privacy",
        ContactsExcept: "contacts_except",
      }),
      b = 50,
      v = [
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
      S = v.length,
      R = [
        o("WAWebAboutWamLogger").PRESET_TYPE.FREE_TO_CHAT,
        o("WAWebAboutWamLogger").PRESET_TYPE.SLOW_TO_RESPOND,
        o("WAWebAboutWamLogger").PRESET_TYPE.HANGING_WITH_FRIENDS,
        o("WAWebAboutWamLogger").PRESET_TYPE.TRAVELING,
        o("WAWebAboutWamLogger").PRESET_TYPE.EXCITED,
      ],
      L = {
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
    function E(e) {
      var t = e.emoji,
        n = e.onSave,
        a,
        i = y(!1),
        l = i[0],
        s = i[1],
        u = h(),
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
              "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp xyi3aci xwf5gio x1p453bz x1suzm8a xnj1f2r x2uibgs xkveyfu x12llq9 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xjbqb8w x1ypdohk x18z0m94 x7s97pk",
            onClick: c,
            ref: u,
            children:
              a || p.jsx(r("WDSIconIcMood.react"), { xstyle: L.moodIcon }),
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
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.onClear,
        n = e.onSave,
        a = e.promptKey,
        i = e.text,
        l = y(function () {
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
          maxCharacterCount: b,
          testid: void 0,
        }),
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = e.onClick,
        a = y(function () {
          var e;
          return (e = o("WAWebUserPrefsGeneral").getUserPrivacySettings()
            .about) != null
            ? e
            : o("WAWebPrivacySettings").VISIBILITY.all;
        }),
        i = a[0],
        l = a[1],
        u = y(0),
        c = u[0],
        d = u[1],
        m = f(function () {
          var e,
            t =
              (e = o("WAWebUserPrefsGeneral").getUserPrivacySettings().about) !=
              null
                ? e
                : o("WAWebPrivacySettings").VISIBILITY.all;
          l(t);
        }, []);
      (o("useWAWebListener").useListener(
        o("WAWebUserPrefsGeneral").privacySettingsEventEmitter,
        "all",
        m,
      ),
        g(
          function () {
            if (i === o("WAWebPrivacySettings").VISIBILITY.contact_blacklist) {
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
          [i],
        ));
      var _ =
          i === o("WAWebPrivacySettings").VISIBILITY.all
            ? s._(/*BTDS*/ "Everyone")
            : i === o("WAWebPrivacySettings").VISIBILITY.contacts
              ? s._(/*BTDS*/ "My contacts")
              : i === o("WAWebPrivacySettings").VISIBILITY.contact_blacklist
                ? s._(/*BTDS*/ "My contacts except {excluded_count}", [
                    s._param("excluded_count", c),
                  ])
                : i === o("WAWebPrivacySettings").VISIBILITY.none
                  ? s._(/*BTDS*/ "Nobody")
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          i,
                      );
                    })(),
        h = p.jsxs("span", {
          className: "x3nfvp2 x6s0dn4",
          children: [
            p.jsx(r("WDSText.react"), {
              type: "Body3Emphasized",
              colorName: "contentActionEmphasized",
              children: _,
            }),
            p.jsx(r("WDSIconIcChevronRight.react"), {
              height: 20,
              width: 20,
              xstyle: L.privacyChevron,
            }),
          ],
        });
      return p.jsxs("div", {
        className: "x78zum5 x6s0dn4 x1tiyuxx x1nxh6w3 xhslqc4",
        "data-testid": void 0,
        children: [
          p.jsx(r("WDSIconIcLock.react"), {
            iconXstyle: L.grayColor,
            xstyle: L.privacyIcon,
          }),
          p.jsx(o("WAWebClickable.react").Clickable, {
            onClick: t,
            children: p.jsx("span", {
              children: s._(/*BTDS*/ "Visible in chats to: {privacy_setting}", [
                s._param("privacy_setting", h),
              ]),
            }),
          }),
        ],
      });
    }
    I.displayName = I.name + " [from " + i.id + "]";
    var T = "custom",
      D = 30,
      x = function () {
        var e = r("WAWeb-moment")().format("YYYY-MM-DD"),
          t = r("WAWeb-moment")().add(D, "days").format("YYYY-MM-DD");
        return [e, t];
      };
    function $(e, t) {
      var n = r("WAWeb-moment")(e + " " + t);
      return Math.max(0, n.diff(r("WAWeb-moment")(), "seconds"));
    }
    function P(e) {
      var t = e.duration,
        n = e.onSave,
        a = o(
          "WAWebEphemeralAboutDurationsUtils",
        ).getTextStatusEphemeralityDurations(),
        i = a.some(function (e) {
          return e.value === t;
        }),
        l = y(!i),
        u = l[0],
        c = l[1],
        d = y(function () {
          return r("WAWeb-moment")().add(1, "day").format("YYYY-MM-DD");
        }),
        m = d[0],
        _ = d[1],
        f = y(function () {
          return r("WAWeb-moment")().format("HH:mm");
        }),
        g = f[0],
        h = f[1],
        C = y(t),
        b = C[0],
        v = C[1];
      if (t !== b) {
        v(t);
        var S = a.some(function (e) {
          return e.value === t;
        });
        if (S && u) c(!1);
        else if (!S && !u) {
          c(!0);
          var R = r("WAWeb-moment")().add(t, "seconds");
          (_(R.format("YYYY-MM-DD")), h(R.format("HH:mm")));
        }
      }
      var E = function (t) {
          t === T ? (c(!0), n($(m, g))) : (c(!1), n(Number(t)));
        },
        k = function (t) {
          (_(t), n($(t, g)));
        },
        I = function (t) {
          (h(t), n($(m, t)));
        },
        D = u ? T : t.toString();
      return p.jsxs(p.Fragment, {
        children: [
          p.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: L.paddingTop,
            children: [
              p.jsx(o("WAWebStatusClockIcon.react").StatusClockIcon, {
                iconXstyle: L.grayColor,
                xstyle: L.timerIcon,
              }),
              p.jsxs(
                o("WAWebSelect.react").Select,
                {
                  defaultLabel: s._(/*BTDS*/ "Select expiry duration"),
                  initialSelection: u ? T : t.toString(),
                  label: s._(/*BTDS*/ "Duration"),
                  onChange: E,
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
                      {
                        optionId: T,
                        primary: s._(/*BTDS*/ "Custom").toString(),
                      },
                      "duration-custom",
                    ),
                  ],
                },
                D,
              ),
            ],
          }),
          u &&
            p.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: L.customDateTimeRow,
              dir: "ltr",
              columnGap: 8,
              children: [
                p.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  basis: 0,
                  children: p.jsx(o("WAWebDateInput.react").DateInput, {
                    name: "about-custom-date",
                    value: m,
                    onChange: k,
                    getDateBoundaries: x,
                    theme: "about",
                    label: s._(/*BTDS*/ "Date"),
                  }),
                }),
                p.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  basis: 0,
                  children: p.jsx(o("WAWebTimeInput.react").TimeInput, {
                    name: "about-custom-time",
                    value: g,
                    onChange: I,
                    theme: "about",
                    label: s._(/*BTDS*/ "Time"),
                  }),
                }),
              ],
            }),
          !u &&
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
    P.displayName = P.name + " [from " + i.id + "]";
    function N(e) {
      var t = e.emojiKey,
        n = e.isDeletable,
        a = e.onDelete,
        i = e.onSelect,
        l = e.textVal,
        u = h(null),
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
        g = function (t) {
          (t.preventDefault(), t.stopPropagation(), f(t));
        };
      return p.jsxs("div", {
        ref: u,
        className:
          "x78zum5 x6s0dn4 x1qughib x1ypdohk x16ovd2e xb0esv5 xs723ss x18z0m94 x1bqaal",
        onClick: i,
        onContextMenu: g,
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
                        xstyle: L.moodIcon,
                      }),
              }),
              p.jsx("span", { className: "x12w63v0", children: l }),
            ],
          }),
          _,
        ],
      });
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M(e) {
      var t = e.handleDeleteSuggestion,
        n = e.onSave,
        o = e.suggestions,
        a = o.length > S;
      return p.jsxs("div", {
        className: "x1xrf6ya",
        children: [
          p.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
          p.jsx("div", {
            className: "x2gs1ea x1odjw0f",
            children: o.map(function (e, o) {
              var i = e.duration,
                l = e.emoji,
                s = e.text;
              return p.jsxs(
                p.Fragment,
                {
                  children: [
                    o === S &&
                      a &&
                      p.jsx("div", {
                        className: "x16ovd2e x12xbjc7",
                        children: p.jsx(r("WAWebDivider.react"), {
                          direction: "horizontal",
                        }),
                      }),
                    p.jsx(N, {
                      emojiKey: l,
                      isDeletable: o >= S,
                      textVal: s,
                      onSelect: function () {
                        return n(l, s, i);
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
    M.displayName = M.name + " [from " + i.id + "]";
    function w(t) {
      var a,
        i,
        l,
        m,
        _,
        f = y(function () {
          return (
            o("WAWebAboutDailyUtils").incrementAboutCreationVisit(),
            Date.now()
          );
        }),
        T = f[0],
        D = h(!1),
        x = r("useWAWebUnmountSignal")(),
        $ = y([]),
        N = $[0],
        w = $[1],
        A = function (t) {
          if (t == null || t.length === 0) {
            w(v);
            return;
          }
          var e = new Set(
              v.map(function (e) {
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
          w([].concat(v, n));
        },
        F = o("WAWebUserPrefsMeUser").getMeUser(),
        O = o("WAWebContactCollection").ContactCollection.assertGet(F),
        B = o("useWAWebContactValues").useContactValues(O.id, [
          (_ = o("WAWebFrontendContactGetters")).getTextStatusString,
          _.getTextStatusEmoji,
          _.getTextStatusEphemeralDuration,
          _.getTextStatusExpiryTs,
          _.getTextStatusLastUpdateTime,
        ]),
        W = B[0],
        q = B[1],
        U = B[2],
        V = B[3],
        H = B[4],
        G = o("WAWebTextStatusUtils").hasTextStatusSet(W, q, H, V, U),
        z = y(G ? W : null),
        j = z[0],
        K = z[1],
        Q = y(G ? q : null),
        X = Q[0],
        Y = Q[1],
        J = o(
          "WAWebEphemeralAboutDurationsUtils",
        ).getTextStatusEphemeralityDurations(),
        Z = J.find(function (e) {
          return e.value === U;
        }),
        ee = y(
          (a = Z == null ? void 0 : Z.value) != null
            ? a
            : o("WAWebEphemeralAboutDurationsUtils")
                .defaultTextStatusEphemeralDuration,
        ),
        te = ee[0],
        ne = ee[1];
      g(
        function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              !(
                !o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() ||
                x.aborted
              )
            ) {
              var e = yield o("WAWebTextStatusAction").getSuggestions();
              x.aborted || A(e);
            }
          })();
        },
        [x.aborted],
      );
      var re = o("useWAWebFlow").useFlow(C.Edit, {
          transitions: o("useWAWebFlow").FlowTransitions.None,
          onEnd: function () {
            return o("WAWebModalManager").ModalManager.close();
          },
        }),
        oe = re[1],
        ae = h(null),
        ie = oe.step;
      if (ie == null) return null;
      var le = function () {
          D.current ||
            ((D.current = !0),
            o("WAWebAboutDailyUtils").incrementAboutCreationStarted());
        },
        se = function (t) {
          (le(), K(t));
        },
        ue = function (t) {
          (le(), Y(t));
        },
        ce = function () {
          (K(null),
            Y(null),
            ne(
              o("WAWebEphemeralAboutDurationsUtils")
                .defaultTextStatusEphemeralDuration,
            ));
        },
        de = function (t) {
          ne(t);
        },
        me = function () {
          return N == null
            ? void 0
            : N.some(function (e) {
                return e.emoji === X && e.text === j;
              });
        },
        pe = function () {
          var e =
            N == null
              ? void 0
              : N.findIndex(function (e) {
                  return e.emoji === X && e.text === j;
                });
          if (e != null && e >= 0 && e < S) return R[e];
        },
        _e = function (t, n, r) {
          (le(), Y(t), K(n), r != null && ne(r));
        },
        fe = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        ge = (function () {
          var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n,
              r = j != null && j.trim() ? j : null;
            if (!(r != null && r.length > b)) {
              if (r === W && X === q && te === U) {
                fe();
                return;
              }
              try {
                yield o("WAWebTextStatusAction").setMyTextStatus(r, X, te);
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
                var a = [X, r].filter(Boolean).join(" ");
                if (
                  (yield o("WAWebContactStatusBridge").setMyStatus(a),
                  (r || X) && !me())
                ) {
                  var i = (N != null ? N : []).slice(S);
                  yield o("WAWebTextStatusAction").setSuggestions(
                    [{ emoji: X, text: r, duration: te }].concat(i),
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
              var l = (r == null || r === "") && X == null,
                s;
              (l
                ? (s = o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE
                    .CLEAR_EXISTING)
                : G
                  ? (s = o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE
                      .UPDATE_EXISTING)
                  : (s = o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE
                      .CREATE_NEW),
                o("WAWebAboutWamLogger").logAboutCreation({
                  aboutDuration: te,
                  aboutEntrypoint: t.entrypoint,
                  aboutLength:
                    (n = r == null ? void 0 : r.length) != null ? n : 0,
                  aboutOverallT: Math.round((Date.now() - T) / 1e3),
                  aboutPresetSelected: me(),
                  aboutPromptKey: t.promptKey,
                  aboutRequestType: s,
                  preset: pe(),
                }),
                o("WAWebAboutDailyUtils").incrementAboutSuccess(),
                fe());
            }
          });
          return function () {
            return r.apply(this, arguments);
          };
        })(),
        he = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (!(e == null || N == null)) {
              var t = [].concat(N);
              t.splice(e, 1);
              try {
                var n = t.slice(S);
                (yield o("WAWebTextStatusAction").setSuggestions(n), A(n));
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
        ye = s._(/*BTDS*/ "About"),
        Ce = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              (yield o("WAWebTextStatusAction").setMyTextStatus(
                null,
                null,
                o("WAWebEphemeralAboutDurationsUtils")
                  .defaultTextStatusEphemeralDuration,
              ),
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
              aboutDuration: o("WAWebEphemeralAboutDurationsUtils")
                .defaultTextStatusEphemeralDuration,
              aboutEntrypoint: t.entrypoint,
              aboutLength: 0,
              aboutOverallT: Math.round((Date.now() - T) / 1e3),
              aboutPresetSelected: !1,
              aboutRequestType: o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE
                .CLEAR_EXISTING,
            }),
              o("WAWebAboutDailyUtils").incrementAboutSuccess(),
              fe());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        be = function () {
          Ce();
        },
        ve = function () {
          ge();
        },
        Se = (i = G ? W : null) != null ? i : null,
        Re = (l = G ? q : null) != null ? l : null,
        Le =
          (m = Z == null ? void 0 : Z.value) != null
            ? m
            : o("WAWebEphemeralAboutDurationsUtils")
                .defaultTextStatusEphemeralDuration,
        Ee = j != null && j.trim() ? j : null,
        ke = Ee === Se && (X != null ? X : null) === Re && te === Le,
        Ie = ke || (!!X && Ee == null) || (j != null && j.length > b);
      return ie === C.Edit
        ? p.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.EditAbout,
            children: p.jsxs("div", {
              className: "x1280gxy",
              children: [
                p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  title: ye,
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                  onCancel: fe,
                }),
                p.jsxs(r("WAWebDrawerBody.react"), {
                  theme: "padding",
                  children: [
                    p.jsxs("div", {
                      className: "xb0esv5 xyo0t3i",
                      children: [
                        p.jsxs(o("WAWebFlex.react").FlexRow, {
                          align: "center",
                          xstyle: L.textEmojiContainer,
                          children: [
                            p.jsx(E, { emoji: X, onSave: ue }),
                            p.jsx(k, {
                              onClear: ce,
                              onSave: se,
                              promptKey: t.promptKey,
                              text: j,
                            }),
                          ],
                        }),
                        p.jsx(I, {
                          onClick: function () {
                            return oe.push(C.Privacy);
                          },
                        }),
                        p.jsx(P, { duration: te, onSave: de }),
                      ],
                    }),
                    p.jsx(M, {
                      handleDeleteSuggestion: he,
                      onSave: _e,
                      suggestions: N,
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className:
                    "x78zum5 x6s0dn4 x1p57kb1 xvpt6g3 xvtqlqk x1m4z3lf x1od0jb8",
                  children: [
                    G &&
                      p.jsx(o("WAWebClickable.react").Clickable, {
                        ariaLabel: s._(/*BTDS*/ "Delete"),
                        onClick: be,
                        children: p.jsx(r("WDSIconIcDelete.react"), {
                          xstyle: L.grayColor,
                        }),
                      }),
                    p.jsx("div", {
                      className: "xvc5jky",
                      children: p.jsx(r("WDSButton.react"), {
                        variant: "filled",
                        size: "medium",
                        type: "default",
                        Icon: o("WAWebWebIcCheckIcon.react").WebIcCheckIcon,
                        disabled: Ie,
                        onPress: ve,
                        testid: void 0,
                        "aria-label": s._(/*BTDS*/ "Save"),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        : ie === C.Privacy
          ? p.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.EditAbout,
              children: p.jsx("div", {
                className: "x1n2onr6 x16nrsnc",
                children: p.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
                  category: "about",
                  onClose: function () {
                    return oe.pop();
                  },
                  onOpenContactsExceptModal: function (t) {
                    ((ae.current = t), oe.push(C.ContactsExcept));
                  },
                }),
              }),
            })
          : ie === C.ContactsExcept
            ? p.jsx(r("WAWebSelectContactsExceptModal.react"), {
                category: "about",
                onConfirm: function () {
                  ae.current == null || ae.current();
                },
                onBack: function () {
                  return oe.pop();
                },
              })
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    ie,
                );
              })();
    }
    ((w.displayName = w.name + " [from " + i.id + "]"), (l.default = w));
  },
  226,
);
