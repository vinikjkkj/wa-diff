__d(
  "WAWebMuteModel",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WATypeUtils",
    "WAWeb-moment",
    "WAWebActionToast.react",
    "WAWebAlarm",
    "WAWebBaseModel",
    "WAWebChatMuteBridge",
    "WAWebMiscErrors",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebMuteMentionAllUtils",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterUpdateUserSettingsAction",
    "WAWebToastManager",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWid",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d, m, p, _, f, g, h, y, C, b, v;
    function S(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var R = v || (v = o("react")),
      L = -1,
      E = "global_reactions_mute";
    function k(e, t) {
      return r("WAWebWid").isGroup(e) && !t
        ? "group"
        : r("WAWebWid").isNewsletter(e) && !t
          ? "newsletter"
          : "chat";
    }
    var I = (function (t) {
      function a() {
        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (e = t.call.apply(t, [this].concat(r)) || this),
          (e.id = o("WAWebBaseModel").prop()),
          (e.expiration = o("WAWebBaseModel").prop(0)),
          (e.callExpiration = o("WAWebBaseModel").prop(0)),
          (e.mentionAllMuteExpiration = o("WAWebBaseModel").prop(0)),
          (e.isAutoMuted = o("WAWebBaseModel").prop(!1)),
          (e.$MuteImpl$p_1 = o("WAWebBaseModel").session()),
          (e.$MuteImpl$p_2 = o("WAWebBaseModel").session()),
          (e.promises = o("WAWebBaseModel").session(function () {
            return {
              mute: null,
              unmute: null,
              muteMentionAll: null,
              unmuteMentionAll: null,
            };
          })),
          babelHelpers.assertThisInitialized(e) ||
            babelHelpers.assertThisInitialized(e)
        );
      }
      babelHelpers.inheritsLoose(a, t);
      var i = a.prototype;
      return (
        (i.initialize = function () {
          (t.prototype.initialize.call(this),
            this.expiration != null &&
              this.expiration !== 0 &&
              this.mute({
                expiration: this.expiration,
                isAutoMuted: this.isAutoMuted,
              }),
            this.callExpiration != null &&
              this.callExpiration !== 0 &&
              this.muteCall(this.callExpiration),
            r("WAWebWid").isGroup(this.id) &&
              this.mentionAllMuteExpiration != null &&
              this.mentionAllMuteExpiration !== 0 &&
              o("WAWebMuteMentionAllUtils").muteMentionAll(
                this,
                this.mentionAllMuteExpiration,
              ));
        }),
        (i.setMute = function (t, n, r) {
          (n === void 0 && (n = !1),
            !(
              ((t == null || t === 0) &&
                (this.expiration == null || this.expiration === 0)) ||
              t === this.expiration
            ) &&
              (t
                ? this.mute({ expiration: t, isAutoMuted: n, sendDevice: r })
                : this.unmute({ sendDevice: r })));
        }),
        (i.setAutoMuted = function (t) {
          this.set({ isAutoMuted: t });
        }),
        (i.mute = function (a) {
          var t = this,
            i = a.expiration,
            l = a.fromMultiselect,
            p = l === void 0 ? !1 : l,
            _ = a.isAutoMuted,
            f = _ === void 0 ? !1 : _,
            g = a.sendDevice,
            h = a.showToast,
            y = h === void 0 ? !0 : h,
            C = a.toastId,
            v = i;
          if (!o("WATypeUtils").isNumber(v))
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:mute called with invalid expiration ",
                    "",
                  ])),
                v,
              ),
              (b || (b = n("Promise"))).reject(
                new (o("WAWebMiscErrors").ActionError)(),
              )
            );
          ((v = Math.round(v)),
            v > 2e9 &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:mute called with wrong units?",
                    " exp:",
                    "",
                  ])),
                this.id.toString(),
                v,
              ));
          var S = function () {
              if (
                (o("WAWebMuteGetters").getIsMuted(t) &&
                  (r("WAWebAlarm").clearTimeout(t.$MuteImpl$p_1),
                  t.unset("_unmuteTimer")),
                v === L)
              )
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "models:Mute:mute ",
                      " muted, no expiration",
                    ])),
                  t.id.toString(),
                );
              else {
                var e = v - r("WAWeb-moment")().unix();
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "models:Mute:mute ",
                      " duration:",
                      "",
                    ])),
                  t.id.toString(),
                  e,
                ),
                  (t.$MuteImpl$p_1 = r("WAWebAlarm").setGlobalTimeout(
                    function () {
                      return void t.unmute();
                    },
                    v * 1e3,
                  )));
              }
              t.set({ expiration: v, isAutoMuted: f });
            },
            E = k(this.id, p);
          if (g === !0) {
            var I;
            if (
              !r("WAWebWid").isNewsletter(this.id) &&
              this.promises.mute != null
            )
              return this.promises.mute;
            var T = r("WAWebWid").isNewsletter(this.id)
                ? (I = this.promises.mute) != null
                  ? I
                  : (b || (b = n("Promise"))).reject(
                      r("err")("No promise for newsletter mute"),
                    )
                : (this.promises.mute = o(
                    "WAWebChatMuteBridge",
                  ).sendConversationMute({
                    $MuteImpl3: this.expiration,
                    chatId: this.id,
                    expiration: v,
                    mentionAllMuteExpiration: r("WAWebWid").isGroup(this.id)
                      ? this.mentionAllMuteExpiration
                      : void 0,
                  })),
              D = new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Muting chat"),
              );
            E === "group"
              ? (D = new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Muting group"),
                ))
              : E === "newsletter" &&
                (D = new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Muting channel"),
                ));
            var x = C != null ? C : o("WAWebActionToast.react").genId(),
              $ = T.catch(function (e) {
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "models:Mute:mute dropped",
                    ])),
                );
                var n = s._(/*BTDS*/ "Couldn't mute chat.");
                if (
                  (E === "group"
                    ? (n = s._(/*BTDS*/ "Couldn't mute group."))
                    : E === "newsletter" &&
                      (D = new (o("WAWebActionToast.react").ActionType)(
                        s._(/*BTDS*/ "Couldn't mute channel"),
                      )),
                  !r("WAWebWid").isNewsletter(t.id))
                )
                  throw new (o("WAWebActionToast.react").ActionType)(n, {
                    actionText: s._(/*BTDS*/ "Try again."),
                    actionHandler: function () {
                      return t.mute({
                        expiration: v,
                        isAutoMuted: f,
                        sendDevice: g,
                        toastId: x,
                      });
                    },
                  });
              }).then(function (e) {
                if (e.status === 200) {
                  var n = s._(/*BTDS*/ "Chat muted");
                  return (
                    E === "group"
                      ? (n = s._(/*BTDS*/ "Group muted"))
                      : E === "newsletter" &&
                        (n = s._(/*BTDS*/ "Channel muted")),
                    p
                      ? new (o("WAWebActionToast.react").ActionType)(n)
                      : new (o("WAWebActionToast.react").ActionType)(n, {
                          actionText: s._(/*BTDS*/ "Undo"),
                          actionHandler: function () {
                            return r("WAWebWid").isNewsletter(t.id)
                              ? o(
                                  "WAWebNewsletterUpdateUserSettingsAction",
                                ).updateNewsletterUserSettingsAction(
                                  t.id,
                                  o("WAWebNewsletterModelUtils").UNMUTED_STATE,
                                  [
                                    o("WAWebNewsletterUpdateUserSettingsAction")
                                      .NewsletterUserSetting.AdminActivity,
                                  ],
                                  {
                                    eventSurface: o(
                                      "WAWebWamEnumChannelEventSurface",
                                    ).CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
                                  },
                                )
                              : t.unmute({ sendDevice: g, toastId: x });
                          },
                        })
                  );
                } else if (e.status >= 400)
                  throw E === "newsletter"
                    ? new (o("WAWebActionToast.react").ActionType)(
                        s._(/*BTDS*/ "Couldn't mute channel"),
                      )
                    : E === "group"
                      ? new (o("WAWebActionToast.react").ActionType)(
                          s._(/*BTDS*/ "Couldn't mute group."),
                        )
                      : new (o("WAWebActionToast.react").ActionType)(
                          s._(/*BTDS*/ "Couldn't mute chat."),
                        );
              });
            return (
              y &&
                o("WAWebToastManager").ToastManager.open(
                  R.jsx(o("WAWebActionToast.react").ActionToast, {
                    id: x,
                    initialAction: D,
                    pendingAction: $,
                  }),
                ),
              T.then(function (e) {
                e.status === 200 && S();
              }).finally(function () {
                t.promises.mute = null;
              })
            );
          }
          return (S(), (b || (b = n("Promise"))).resolve());
        }),
        (i.muteCall = function (t) {
          var e = this,
            a = t;
          if (!o("WATypeUtils").isNumber(a))
            return (
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:muteCall called with invalid expiration ",
                    "",
                  ])),
                a,
              ),
              (b || (b = n("Promise"))).reject(
                new (o("WAWebMiscErrors").ActionError)(),
              )
            );
          if (
            ((a = Math.round(a)),
            a > 2e9 &&
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:muteCall called with wrong units?",
                    " exp:",
                    "",
                  ])),
                this.id.toString(),
                a,
              ),
            o("WAWebMuteGetters").getIsCallMuted(this) &&
              (r("WAWebAlarm").clearTimeout(this.$MuteImpl$p_2),
              this.unset("_unmuteCallTimer")),
            a === L)
          )
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "models:Mute:muteCall ",
                  " muted, no expiration",
                ])),
              this.id.toString(),
            );
          else {
            var i = a - r("WAWeb-moment")().unix();
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "models:Mute:muteCall ",
                  " duration:",
                  "",
                ])),
              this.id.toString(),
              i,
            ),
              (this.$MuteImpl$p_2 = r("WAWebAlarm").setGlobalTimeout(
                function () {
                  return void e.$MuteImpl$p_4();
                },
                a * 1e3,
              )));
          }
          return (
            this.set({ callExpiration: a }),
            (b || (b = n("Promise"))).resolve()
          );
        }),
        (i.$MuteImpl$p_5 = function () {
          (r("WAWebAlarm").clearTimeout(this.$MuteImpl$p_1),
            this.unset("_unmuteTimer"),
            (this.expiration = 0));
        }),
        (i.$MuteImpl$p_6 = function () {
          (r("WAWebAlarm").clearTimeout(this.$MuteImpl$p_2),
            this.unset("_unmuteCallTimer"),
            (this.callExpiration = 0));
        }),
        (i.unmute = function (t) {
          var e = this,
            a = t === void 0 ? {} : t,
            i = a.fromMultiselect,
            l = i === void 0 ? !1 : i,
            u = a.sendDevice,
            c = a.showToast,
            d = c === void 0 ? !0 : c,
            m = a.toastId,
            p = !1,
            _ = function () {
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:unmute ",
                    "",
                  ])),
                e.id.toString(),
              ),
                e.$MuteImpl$p_5(),
                e.set(
                  babelHelpers.extends(
                    { isAutoMuted: p },
                    r("WAWebWid").isGroup(e.id) && {
                      mentionAllMuteExpiration: 0,
                    },
                  ),
                ));
            },
            f = k(this.id, l);
          if (u === !0) {
            var g;
            if (!r("WAWebWid").isNewsletter(this.id) && this.promises.unmute)
              return this.promises.unmute;
            var C = r("WAWebWid").isNewsletter(this.id)
                ? (g = this.promises.unmute) != null
                  ? g
                  : (b || (b = n("Promise"))).reject(
                      r("err")("No promise for newsletter mute"),
                    )
                : (this.promises.unmute = o(
                    "WAWebChatMuteBridge",
                  ).sendConversationMute({
                    $MuteImpl3: this.expiration,
                    chatId: this.id,
                    expiration: 0,
                  })),
              v = new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Unmuting chat"),
              );
            f === "group"
              ? (v = new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Unmuting group"),
                ))
              : f === "newsletter" &&
                (v = new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Unmuting channel"),
                ));
            var S = m || o("WAWebActionToast.react").genId(),
              L = this.promises.unmute
                .catch(function (t) {
                  o("WALogger").WARN(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "models:Mute:unmute dropped",
                      ])),
                  );
                  var n = s._(/*BTDS*/ "Couldn't unmute chat.");
                  if (
                    (f === "group"
                      ? (n = s._(/*BTDS*/ "Couldn't unmute group."))
                      : f === "newsletter" &&
                        (n = s._(/*BTDS*/ "Couldn't unmute channel.")),
                    !r("WAWebWid").isNewsletter(e.id))
                  )
                    throw new (o("WAWebActionToast.react").ActionType)(n, {
                      actionText: s._(/*BTDS*/ "Try again."),
                      actionHandler: function () {
                        return e.unmute({ sendDevice: u, toastId: S });
                      },
                    });
                })
                .then(function (t) {
                  if (t.status === 200)
                    return f === "group"
                      ? new (o("WAWebActionToast.react").ActionType)(
                          s._(/*BTDS*/ "Group unmuted"),
                        )
                      : f === "newsletter"
                        ? new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Channel unmuted"),
                            {
                              actionText: s._(/*BTDS*/ "Undo"),
                              actionHandler: function () {
                                return o(
                                  "WAWebNewsletterUpdateUserSettingsAction",
                                ).updateNewsletterUserSettingsAction(
                                  e.id,
                                  o("WAWebNewsletterModelUtils").MUTED_STATE,
                                  [
                                    o("WAWebNewsletterUpdateUserSettingsAction")
                                      .NewsletterUserSetting.AdminActivity,
                                  ],
                                  {
                                    eventSurface: o(
                                      "WAWebWamEnumChannelEventSurface",
                                    ).CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
                                  },
                                );
                              },
                            },
                          )
                        : new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Chat unmuted"),
                          );
                  if (t.status >= 400)
                    throw f === "newsletter"
                      ? new (o("WAWebActionToast.react").ActionType)(
                          s._(/*BTDS*/ "Couldn't unmute channel"),
                        )
                      : f === "group"
                        ? new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Couldn't unmute group."),
                          )
                        : new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Couldn't unmute chat."),
                          );
                });
            return (
              d &&
                o("WAWebToastManager").ToastManager.open(
                  R.jsx(o("WAWebActionToast.react").ActionToast, {
                    id: S,
                    initialAction: v,
                    pendingAction: L,
                  }),
                ),
              C.then(function (e) {
                e.status === 200 && _();
              }).finally(function () {
                e.promises.unmute = null;
              })
            );
          }
          return (_(), (b || (b = n("Promise"))).resolve());
        }),
        (i.$MuteImpl$p_4 = function () {
          return (
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "models:Mute:unmuteCall ",
                  "",
                ])),
              this.id.toString(),
            ),
            this.$MuteImpl$p_6(),
            (b || (b = n("Promise"))).resolve()
          );
        }),
        (i.delete = function () {
          (t.prototype.delete.call(this),
            this.getCollection().remove(this.id),
            this.$MuteImpl$p_5(),
            o("WAWebMuteGetters").clearMuteGetterCacheFor(this));
        }),
        (i.getCollection = function () {
          return o("WAWebMuteCollection").MuteCollection;
        }),
        a
      );
    })(o("WAWebBaseModel").BaseModel);
    ((I.Proxy = "mute"), (I.idClass = r("WAWebWid")), (I.allowedIds = [E]));
    var T = o("WAWebBaseModel").defineModel(I);
    ((l.GLOBAL_REACTIONS_MUTE = E), (l.Mute = T));
  },
  226,
);
