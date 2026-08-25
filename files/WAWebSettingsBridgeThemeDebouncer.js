__d(
  "WAWebSettingsBridgeThemeDebouncer",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeValue",
    "WAWebDebounce",
    "WAWebSettingsSyncEventEmitter",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["inheritsTheme"],
      s,
      u,
      c,
      d,
      m = 500,
      p = 1e3,
      _ = new Map(),
      f = 0;
    function g(e, t) {
      (C(), v(e));
      var n = b(e);
      (R(n.buffer, t), n.flush());
    }
    function h() {
      for (var e of Array.from(_.values())) e.flush.flush();
    }
    var y = !1;
    function C() {
      y ||
        ((y = !0),
        self.addEventListener("pagehide", h),
        document.addEventListener("visibilitychange", function () {
          document.visibilityState === "hidden" && h();
        }));
    }
    function b(e) {
      var t = S(e),
        n = _.get(t);
      if (n != null) return n;
      var o = {},
        a = r("WAWebDebounce")(
          function () {
            L(e, o, t);
          },
          m,
          { leading: !1, trailing: !0, maxWait: p },
        ),
        i = { buffer: o, flush: a };
      return (_.set(t, i), i);
    }
    function v(e) {
      if (e.kind === "chat") {
        var t;
        (t = _.get("default")) == null || t.flush.flush();
        return;
      }
      for (var n of Array.from(_.entries())) {
        var r = n[0],
          o = n[1];
        r !== "default" && o.flush.flush();
      }
    }
    function S(e) {
      return e.kind === "default"
        ? "default"
        : "chat:" + o("WAWebWidFactory").createWid(e.chatJid).toString();
    }
    function R(e, t) {
      e: {
        var n = t;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.field === "chatThemeId" &&
          "normalizedId" in n
        ) {
          var r = n.normalizedId;
          e.chatThemeId = { value: r };
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.field === "colorSchemeId" &&
          "normalizedId" in n
        ) {
          var o = n.normalizedId;
          e.colorSchemeId = { value: o };
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.field === "wallpaperSolid" &&
          "wallpaperId" in n
        ) {
          var a = n.wallpaperId;
          e.wallpaperRepresentation = {
            kind: "solid",
            wallpaperId: a,
            arrivalSequence: f++,
          };
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.field === "wallpaperStock" &&
          "rawValue" in n
        ) {
          var i = n.rawValue;
          e.wallpaperRepresentation = {
            kind: "stock",
            rawValue: i,
            arrivalSequence: f++,
          };
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.field === "doodle" &&
          "value" in n
        ) {
          var l = n.value;
          e.doodle = { value: l, arrivalSequence: f++ };
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    function L(e, t, n) {
      _.delete(n);
      try {
        e.kind === "default" ? k(t) : I(e.chatJid, t);
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[settings-sync] theme sync flush failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("chat-theme-sync-flush-failed");
      }
    }
    function E(e) {
      o("WALogger")
        .ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[settings-sync] theme sync write failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("chat-theme-sync-write-fail");
    }
    function k(e) {
      var t = r("WAWebChatPreferenceCollection").getDefault();
      P(e) && t.set("chatThemeValue", N(t.chatThemeValue, null, e, !1));
      var n = e.wallpaperRepresentation;
      if (n != null && n.kind === "solid") {
        (e.doodle != null &&
          t.set(
            "wallpaperValue",
            o("WAWebChatThemeValue").wallpaperValueWithDoodle(
              t.wallpaperValue,
              e.doodle.value,
            ),
          ),
          r("WAWebSettingsSyncEventEmitter").trigger(
            "applyWallpaper",
            n.wallpaperId,
          ));
        return;
      }
      var a = x({
        buffer: e,
        currentWallpaper: t.wallpaperValue,
        inheritOnClear: !1,
      });
      a.write && t.set("wallpaperValue", a.value);
    }
    function I(e, t) {
      var n = W(e);
      if (n != null) {
        var o = M(n, t);
        if (o.write) {
          var a = o.value;
          n.setChatThemeValue(
            a.chatThemeId == null && a.colorSchemeId == null ? null : a,
          ).catch(E);
        }
        var i = t.wallpaperRepresentation;
        if (i != null && i.kind === "solid") {
          T({
            chat: n,
            chatJid: e,
            doodle: t.doodle,
            wallpaperRepresentation: i,
          });
          return;
        }
        var l = r("WAWebChatPreferenceCollection").getDefault().wallpaperValue,
          s = x({
            buffer: t,
            currentWallpaper: D(n),
            inheritedWallpaper: l,
            inheritOnClear: !0,
          });
        s.write && n.setWallpaperValue(s.value).catch(E);
      }
    }
    function T(e) {
      var t = e.chat,
        n = e.chatJid,
        a = e.doodle,
        i = e.wallpaperRepresentation,
        l = a != null && a.arrivalSequence > i.arrivalSequence;
      (a != null &&
        !l &&
        t
          .setWallpaperValue(
            o("WAWebChatThemeValue").wallpaperValueWithDoodle(D(t), a.value),
          )
          .catch(E),
        r("WAWebSettingsSyncEventEmitter").trigger("applyPerChatWallpaper", {
          chatJid: n,
          wallpaperId: i.wallpaperId,
        }),
        a != null &&
          l &&
          t
            .setWallpaperValue(
              o("WAWebChatThemeValue").wallpaperValueWithDoodle(D(t), a.value),
            )
            .catch(E));
    }
    function D(e) {
      var t = e.wallpaperValue;
      return o("WAWebChatThemeValue").isWallpaperOverride(t)
        ? t
        : r("WAWebChatPreferenceCollection").getDefault().wallpaperValue;
    }
    function x(e) {
      var t = e.buffer,
        n = e.currentWallpaper,
        r = e.inheritedWallpaper,
        a = e.inheritOnClear,
        i = t.wallpaperRepresentation,
        l = t.doodle;
      return i == null
        ? l == null
          ? { write: !1 }
          : {
              write: !0,
              value: o("WAWebChatThemeValue").wallpaperValueWithDoodle(
                n,
                l.value,
              ),
            }
        : i.kind !== "stock"
          ? { write: !1 }
          : $({
              currentWallpaper: n,
              rawValue: i.rawValue,
              wallpaperArrivalSequence: i.arrivalSequence,
              doodle: l,
              inheritedWallpaper: r,
              inheritOnClear: a,
            });
    }
    function $(e) {
      var t = e.currentWallpaper,
        n = e.doodle,
        r = e.inheritedWallpaper,
        a = e.inheritOnClear,
        i = e.rawValue,
        l = e.wallpaperArrivalSequence,
        s = typeof i == "string" && i !== "" ? i : null;
      return s != null
        ? {
            write: !0,
            value: o("WAWebChatThemeValue").wallpaperValueFromFlat({
              wallpaper: null,
              showDoodle: B({
                currentWallpaper: t,
                doodle: n,
                inheritedWallpaper: r,
                inheritOnClear: a,
              }),
              stockWallpaperImageId: s,
            }),
          }
        : a
          ? n != null && n.arrivalSequence > l
            ? {
                write: !0,
                value: o("WAWebChatThemeValue").wallpaperValueWithDoodle(
                  r,
                  n.value,
                ),
              }
            : { write: !0, value: null }
          : {
              write: !0,
              value: o("WAWebChatThemeValue").wallpaperValueFromFlat({
                wallpaper: null,
                showDoodle: B({
                  currentWallpaper: t,
                  doodle: n,
                  inheritedWallpaper: r,
                  inheritOnClear: a,
                }),
                stockWallpaperImageId: null,
              }),
            };
    }
    function P(e) {
      return e.chatThemeId != null || e.colorSchemeId != null;
    }
    function N(e, t, n, r) {
      var a = F(n.chatThemeId, e == null ? void 0 : e.chatThemeId),
        i = F(n.colorSchemeId, e == null ? void 0 : e.colorSchemeId),
        l = o("WAWebChatThemeValue").chatThemeValueFromSyncedFields(
          { chatThemeId: a, colorSchemeId: i },
          e,
        );
      return (
        O("chatThemeId", n.chatThemeId, l.chatThemeId),
        O("colorSchemeId", n.colorSchemeId, l.colorSchemeId),
        r && w(e, t, n, l)
          ? babelHelpers.extends({}, l, { inheritsTheme: !0 })
          : l
      );
    }
    function M(e, t) {
      var n,
        r =
          ((n = t.wallpaperRepresentation) == null ? void 0 : n.kind) ===
          "solid";
      if (!P(t)) {
        var o;
        return r &&
          ((o = e.chatThemeValue) == null ? void 0 : o.inheritsTheme) === !0
          ? { write: !0, value: A(e.chatThemeValue) }
          : { write: !1 };
      }
      var a = N(e.chatThemeValue, e.wallpaperValue, t, !0);
      return { write: !0, value: r ? A(a) : a };
    }
    function w(e, t, n, r) {
      var a;
      if (
        r.chatThemeId != null ||
        r.colorSchemeId == null ||
        (t == null ? void 0 : t.type) === "solid"
      )
        return !1;
      var i =
        n.chatThemeId != null &&
        (n.chatThemeId.value == null || n.chatThemeId.value === "");
      return (
        (e == null ? void 0 : e.inheritsTheme) === !0 ||
        i ||
        (!o("WAWebChatThemeValue").isChatThemeOverride(e) &&
          ((a = n.colorSchemeId) == null ? void 0 : a.value) != null)
      );
    }
    function A(t) {
      var n = t.inheritsTheme,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return r;
    }
    function F(e, t) {
      return e != null ? e.value : t != null ? t : null;
    }
    function O(e, t, n) {
      t == null ||
        t.value == null ||
        n != null ||
        (e === "chatThemeId"
          ? o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Unrecognized chatThemeId ",
                    "",
                  ])),
                String(t.value),
              )
              .sendLogs("chat-theme-sync-unknown-theme")
          : o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Unrecognized colorSchemeId ",
                    "",
                  ])),
                String(t.value),
              )
              .sendLogs("chat-theme-sync-unknown-color-scheme"));
    }
    function B(e) {
      var t,
        n = e.currentWallpaper,
        r = e.doodle,
        a = e.inheritedWallpaper,
        i = e.inheritOnClear,
        l =
          r != null
            ? r.value
            : o("WAWebChatThemeValue").doodleFromWallpaperValue(n);
      return l != null || !i
        ? l
        : (t = o("WAWebChatThemeValue").doodleFromWallpaperValue(a)) != null
          ? t
          : !0;
    }
    function W(e) {
      var t = o("WAWebWidFactory").createWid(e);
      return t.isLid()
        ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(t)
        : o("WAWebChatCollection").ChatCollection.get(t);
    }
    ((l.enqueueThemeSync = g), (l.flushAllThemeSync = h));
  },
  98,
);
