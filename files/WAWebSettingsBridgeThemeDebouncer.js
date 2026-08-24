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
    var e,
      s,
      u,
      c,
      d = 500,
      m = 1e3,
      p = new Map(),
      _ = 0;
    function f(e, t) {
      (y(), b(e));
      var n = C(e);
      (S(n.buffer, t), n.flush());
    }
    function g() {
      for (var e of Array.from(p.values())) e.flush.flush();
    }
    var h = !1;
    function y() {
      h ||
        ((h = !0),
        self.addEventListener("pagehide", g),
        document.addEventListener("visibilitychange", function () {
          document.visibilityState === "hidden" && g();
        }));
    }
    function C(e) {
      var t = v(e),
        n = p.get(t);
      if (n != null) return n;
      var o = {},
        a = r("WAWebDebounce")(
          function () {
            R(e, o, t);
          },
          d,
          { leading: !1, trailing: !0, maxWait: m },
        ),
        i = { buffer: o, flush: a };
      return (p.set(t, i), i);
    }
    function b(e) {
      if (e.kind === "chat") {
        var t;
        (t = p.get("default")) == null || t.flush.flush();
        return;
      }
      for (var n of Array.from(p.entries())) {
        var r = n[0],
          o = n[1];
        r !== "default" && o.flush.flush();
      }
    }
    function v(e) {
      return e.kind === "default"
        ? "default"
        : "chat:" + o("WAWebWidFactory").createWid(e.chatJid).toString();
    }
    function S(e, t) {
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
            arrivalSequence: _++,
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
            arrivalSequence: _++,
          };
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.field === "doodle" &&
          "value" in n
        ) {
          var l = n.value;
          e.doodle = { value: l, arrivalSequence: _++ };
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    function R(t, n, a) {
      p.delete(a);
      try {
        t.kind === "default" ? E(n) : k(t.chatJid, n);
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[settings-sync] theme sync flush failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("chat-theme-sync-flush-failed");
      }
    }
    function L(e) {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[settings-sync] theme sync write failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("chat-theme-sync-write-fail");
    }
    function E(e) {
      var t = r("WAWebChatPreferenceCollection").getDefault();
      $(e) && t.set("chatThemeValue", P(t.chatThemeValue, e));
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
      var a = D({
        buffer: e,
        currentWallpaper: t.wallpaperValue,
        inheritOnClear: !1,
      });
      a.write && t.set("wallpaperValue", a.value);
    }
    function k(e, t) {
      var n = A(e);
      if (n != null) {
        if ($(t)) {
          var o = P(n.chatThemeValue, t);
          n.setChatThemeValue(
            o.chatThemeId == null && o.colorSchemeId == null ? null : o,
          ).catch(L);
        }
        var a = t.wallpaperRepresentation;
        if (a != null && a.kind === "solid") {
          I({
            chat: n,
            chatJid: e,
            doodle: t.doodle,
            wallpaperRepresentation: a,
          });
          return;
        }
        var i = r("WAWebChatPreferenceCollection").getDefault().wallpaperValue,
          l = D({
            buffer: t,
            currentWallpaper: T(n),
            inheritedWallpaper: i,
            inheritOnClear: !0,
          });
        l.write && n.setWallpaperValue(l.value).catch(L);
      }
    }
    function I(e) {
      var t = e.chat,
        n = e.chatJid,
        a = e.doodle,
        i = e.wallpaperRepresentation,
        l = a != null && a.arrivalSequence > i.arrivalSequence;
      (a != null &&
        !l &&
        t
          .setWallpaperValue(
            o("WAWebChatThemeValue").wallpaperValueWithDoodle(T(t), a.value),
          )
          .catch(L),
        r("WAWebSettingsSyncEventEmitter").trigger("applyPerChatWallpaper", {
          chatJid: n,
          wallpaperId: i.wallpaperId,
        }),
        a != null &&
          l &&
          t
            .setWallpaperValue(
              o("WAWebChatThemeValue").wallpaperValueWithDoodle(T(t), a.value),
            )
            .catch(L));
    }
    function T(e) {
      var t = e.wallpaperValue;
      return o("WAWebChatThemeValue").isWallpaperOverride(t)
        ? t
        : r("WAWebChatPreferenceCollection").getDefault().wallpaperValue;
    }
    function D(e) {
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
          : x({
              currentWallpaper: n,
              rawValue: i.rawValue,
              wallpaperArrivalSequence: i.arrivalSequence,
              doodle: l,
              inheritedWallpaper: r,
              inheritOnClear: a,
            });
    }
    function x(e) {
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
              showDoodle: w({
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
                showDoodle: w({
                  currentWallpaper: t,
                  doodle: n,
                  inheritedWallpaper: r,
                  inheritOnClear: a,
                }),
                stockWallpaperImageId: null,
              }),
            };
    }
    function $(e) {
      return e.chatThemeId != null || e.colorSchemeId != null;
    }
    function P(e, t) {
      var n = N(t.chatThemeId, e == null ? void 0 : e.chatThemeId),
        r = N(t.colorSchemeId, e == null ? void 0 : e.colorSchemeId),
        a = o("WAWebChatThemeValue").chatThemeValueFromSyncedFields(
          { chatThemeId: n, colorSchemeId: r },
          e,
        );
      return (
        M("chatThemeId", t.chatThemeId, a.chatThemeId),
        M("colorSchemeId", t.colorSchemeId, a.colorSchemeId),
        a
      );
    }
    function N(e, t) {
      return e != null ? e.value : t != null ? t : null;
    }
    function M(e, t, n) {
      t == null ||
        t.value == null ||
        n != null ||
        (e === "chatThemeId"
          ? o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Unrecognized chatThemeId ",
                    "",
                  ])),
                String(t.value),
              )
              .sendLogs("chat-theme-sync-unknown-theme")
          : o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Unrecognized colorSchemeId ",
                    "",
                  ])),
                String(t.value),
              )
              .sendLogs("chat-theme-sync-unknown-color-scheme"));
    }
    function w(e) {
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
    function A(e) {
      var t = o("WAWebWidFactory").createWid(e);
      return t.isLid()
        ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(t)
        : o("WAWebChatCollection").ChatCollection.get(t);
    }
    ((l.enqueueThemeSync = f), (l.flushAllThemeSync = g));
  },
  98,
);
