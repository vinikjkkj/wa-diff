__d(
  "WAWebRenderCursor",
  [
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebMessageListAlbums",
    "WAWebMsgGetters",
    "WAWebRenderCursorGetWindowHeight",
    "WAWebRenderCursorGuessMessageHeight",
    "WAWebUserPrefsMeUser",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        RECENT_AT_TOP: "recent_at_top",
        RECENT_AT_BOTTOM: "recent_at_bottom",
        CONVERSATION: "conversation",
        GROUP_CONVERSATION: "group_conversation",
        STARRED_DRAWER: "starred_drawer",
      },
      u = { BEFORE: "before", AFTER: "after" },
      c = 2,
      d = 12,
      m = 19,
      p = 65,
      _ = 2;
    function f(t, n, r) {
      var a = n,
        i = t.toArray(),
        l = r === u.BEFORE ? -1 : 1;
      return {
        hasNext: function () {
          return a >= 0 && a < i.length;
        },
        next: function () {
          var t = i[a];
          return (
            t ||
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Invalid cursor at ",
                    ", array.length = ",
                    ", element = ",
                    "",
                  ])),
                a,
                i.length,
                t,
              ),
            (a += l),
            t
          );
        },
      };
    }
    function g(e) {
      for (
        var t = e.direction,
          n = e.factor,
          a = n === void 0 ? 1 : n,
          i = e.first,
          l = e.maxPageSize,
          s = e.msgCollection,
          u = r("WAWebRenderCursorGetWindowHeight")() * a,
          m = f(s, i, t),
          p = 0,
          _ = 0,
          g;
        m.hasNext();
      ) {
        var h = m.next(),
          y = r("WAWebRenderCursorGuessMessageHeight")(h),
          C =
            2 * (o("WAWebMsgGetters").getIsNotification(h) ? 1 : 0) +
            (o("WAWebMsgGetters").getIsSentByMe(h) ? 1 : 0),
          b = !C || C !== g ? d : c;
        if (((p += y + b), _++, p > u || _ >= l)) break;
        var v = o("WAWebFrontendMsgGetters").getAsGroupedSticker(h),
          S = o("WAWebFrontendMsgGetters").getAsAlbumAsset(h) != null;
        if (v || S) {
          var R = [],
            L = !1,
            E = 1;
          if (v) {
            var k = void 0;
            if (m.hasNext()) {
              if (((k = m.next()), R.push(k), _++, _ >= l)) break;
              o("WAWebMessageListAlbums").canBeGroupedAsAlbum(
                h.safe(),
                k.safe(),
              ) &&
                o("WAWebFrontendMsgGetters").getAsGroupedSticker(k) &&
                (L = !0);
            }
          }
          if (S)
            for (
              var I = h, T = void 0;
              m.hasNext() &&
              E < o("WAWebMessageListAlbums").ALBUM_MAX_SIZE &&
              ((T = m.next()), R.push(T), _++, !(_ >= l));
            )
              if (
                o("WAWebMessageListAlbums").canBeGroupedAsAlbum(
                  I.safe(),
                  T.safe(),
                ) &&
                o("WAWebFrontendMsgGetters").getAsAlbumAsset(T)
              )
                (E++, (I = T));
              else break;
          if (
            (v && !L) ||
            (S && E < o("WAWebMessageListAlbums").ALBUM_MIN_SIZE)
          ) {
            var D = r("sumBy")(R, function (e) {
              return r("WAWebRenderCursorGuessMessageHeight")(e);
            });
            if (((p += D), p > u)) break;
          }
        }
        g = C;
      }
      return _;
    }
    function h(e) {
      for (
        var t = e.direction,
          n = e.factor,
          a = n === void 0 ? 1 : n,
          i = e.first,
          l = e.maxPageSize,
          s = e.msgCollection,
          u = r("WAWebRenderCursorGetWindowHeight")() * a,
          p = f(s, i, t),
          _ = 0,
          g = 0,
          h;
        p.hasNext();
      ) {
        var y = p.next(),
          C = r("WAWebRenderCursorGuessMessageHeight")(y),
          b =
            y.author ||
            (o("WAWebMsgGetters").getIsSentByMe(y)
              ? o("WAWebUserPrefsMeUser").getMaybeMePnUser()
              : void 0),
          v = b && !o("WAWebMsgGetters").getIsSentByMe(y) && b !== h ? m : 0,
          S = !b || b !== h ? d : c;
        if (((_ += C + v + S), g++, _ > u || g >= l)) break;
        var R = o("WAWebFrontendMsgGetters").getAsGroupedSticker(y),
          L = o("WAWebFrontendMsgGetters").getAsAlbumAsset(y) != null;
        if (R || L) {
          var E = [],
            k = !1,
            I = 1;
          if (R) {
            var T = void 0;
            if (p.hasNext()) {
              if (((T = p.next()), E.push(T), g++, g >= l)) break;
              o("WAWebMessageListAlbums").canBeGroupedAsAlbum(
                y.safe(),
                T.safe(),
              ) &&
                o("WAWebFrontendMsgGetters").getAsGroupedSticker(T) &&
                (k = !0);
            }
          }
          if (L)
            for (
              var D = y, x = void 0;
              p.hasNext() &&
              I < o("WAWebMessageListAlbums").ALBUM_MAX_SIZE &&
              ((x = p.next()), E.push(x), g++, !(g >= l));
            )
              if (
                o("WAWebMessageListAlbums").canBeGroupedAsAlbum(
                  D.safe(),
                  x.safe(),
                ) &&
                o("WAWebFrontendMsgGetters").getAsAlbumAsset(x) != null
              )
                (I++, (D = x));
              else break;
          if (
            (R && !k) ||
            (L && I < o("WAWebMessageListAlbums").ALBUM_MIN_SIZE)
          ) {
            var $ = r("sumBy")(E, function (e) {
              return r("WAWebRenderCursorGuessMessageHeight")(e);
            });
            if (((_ += $), _ > u)) break;
          }
        }
        h = b;
      }
      return g;
    }
    function y(e) {
      for (
        var t = e.direction,
          n = e.factor,
          o = n === void 0 ? 1 : n,
          a = e.first,
          i = e.maxPageSize,
          l = e.msgCollection,
          s = r("WAWebRenderCursorGetWindowHeight")() * o,
          u = f(l, a, t),
          c = 0,
          d = 0;
        u.hasNext();
      ) {
        var m = u.next(),
          _ = r("WAWebRenderCursorGuessMessageHeight")(m);
        if (((c += _ + p), d++, c > s || d >= i)) break;
      }
      return d;
    }
    function C(e) {
      switch (e) {
        case s.CONVERSATION:
        case s.GROUP_CONVERSATION:
          return s.RECENT_AT_BOTTOM;
        case s.STARRED_DRAWER:
          return s.RECENT_AT_TOP;
        default:
          return s.RECENT_AT_BOTTOM;
      }
    }
    function b(e) {
      switch (e) {
        case s.CONVERSATION:
          return g;
        case s.GROUP_CONVERSATION:
          return h;
        case s.STARRED_DRAWER:
          return y;
        default:
          return g;
      }
    }
    function v(e, t, n) {
      n === void 0 && (n = u.AFTER);
      for (
        var a = r("WAWebRenderCursorGetWindowHeight")() * _,
          i = f(e, t, n),
          l = 0,
          s = !0,
          m = null;
        i.hasNext();
      ) {
        var p = i.next(),
          g = r("WAWebRenderCursorGuessMessageHeight")(p),
          h =
            2 * (o("WAWebMsgGetters").getIsNotification(p) ? 1 : 0) +
            (o("WAWebMsgGetters").getIsSentByMe(p) ? 1 : 0),
          y = !h || h !== m ? d : c;
        if (((l += g + y), l > a)) {
          s = !1;
          break;
        }
        m = h;
      }
      return s;
    }
    var S = (function () {
      function e(e) {
        var t = e.after,
          n = e.before,
          r = e.focusedMsgKey,
          o = e.prevFocusedMsgKey,
          a = e.type;
        ((this.$3 = a),
          (this.$1 = r),
          (this.$2 = o),
          (this.before = n || 0),
          (this.after = t || 0));
      }
      e.create = function (n) {
        var t = n.msgCollection,
          r = n.focusedMsgKey,
          o = n.type,
          a = n.maxInitialCount,
          i = a === void 0 ? Number.MAX_SAFE_INTEGER : a;
        return new e({ type: o }).init(r, t, i);
      };
      var t = e.prototype;
      return (
        (t.$4 = function (n) {
          return new e(
            babelHelpers.extends(
              {
                type: this.$3,
                before: this.before,
                after: this.after,
                focusedMsgKey: this.$1,
                prevFocusedMsgKey: this.$2,
              },
              n,
            ),
          );
        }),
        (t.$5 = function (t, n, r, o, a) {
          var e = b(this.$3);
          return e({
            direction: r,
            factor: o,
            first: n,
            maxPageSize: a,
            msgCollection: t,
          });
        }),
        (t.getStart = function (t) {
          return Math.max(R(this.$1, t, this.$3) - this.before, 0);
        }),
        (t.getEnd = function (t) {
          return Math.min(R(this.$1, t, this.$3) + this.after + 1, t.length);
        }),
        (t.hasBefore = function (t) {
          return R(this.$1, t, this.$3) - this.before > 0;
        }),
        (t.hasAfter = function (t) {
          return R(this.$1, t, this.$3) + this.after < t.length - 1;
        }),
        (t.init = function (n, r, o) {
          return (
            o === void 0 && (o = Number.MAX_SAFE_INTEGER),
            new e({ type: this.$3, before: 0, after: 0, focusedMsgKey: n })
              .loadBefore(r, { factor: 1, maxCount: o })
              .loadAfter(r, { factor: 1, maxCount: o })
          );
        }),
        (t.setFocusedMsgKey = function (t, n) {
          var e = R(this.$1, t, this.$3),
            r = R(n, t, this.$3),
            o,
            a;
          return (
            n
              ? ((a = this.after - (r - e)), (o = this.before + (r - e)))
              : ((o = this.before + this.after), (a = 0)),
            this.$4({ focusedMsgKey: n, before: o, after: a }).$6(t)
          );
        }),
        (t.ensureValidFocus = function (t) {
          var e = this.$2 != null && t.get(this.$2) == null,
            n = this.$1 != null && t.get(this.$1) == null,
            r = this;
          return (e && (r = r.$6(t)), n && (r = r.focusBefore(t)), r);
        }),
        (t.$6 = function (t) {
          var e,
            n = R(this.$1, t, this.$3);
          return this.$4({
            prevFocusedMsgKey:
              n > 0 ? ((e = t.at(n - 1)) == null ? void 0 : e.id) : void 0,
          });
        }),
        (t.focusBefore = function (t) {
          return this.$4({ focusedMsgKey: this.$2 }).$6(t);
        }),
        (t.loadBefore = function (t, n) {
          var e = n || {},
            r = e.count,
            o = e.maxCount,
            a = o === void 0 ? Number.MAX_SAFE_INTEGER : o,
            i = e.factor,
            l = i === void 0 ? 2 : i,
            s =
              r != null && r !== 0
                ? r
                : this.$5(t, Math.max(0, this.getStart(t) - 1), u.BEFORE, l, a);
          return this.$4({ before: this.before + s });
        }),
        (t.loadAfter = function (t, n) {
          var e = n || {},
            r = e.count,
            o = e.maxCount,
            a = o === void 0 ? Number.MAX_SAFE_INTEGER : o,
            i = e.factor,
            l = i === void 0 ? 2 : i,
            s =
              r != null && r !== 0
                ? r
                : this.$5(t, this.getEnd(t), u.AFTER, l, a);
          return this.$4({ after: this.after + s });
        }),
        (t.loadBeforeCapped = function (t, n) {
          var e = n || {},
            r = e.count,
            o = e.factor,
            a = o === void 0 ? 2 : o;
          return v(t, this.getStart(t), u.AFTER)
            ? this.loadBefore(t, { count: r, factor: a })
            : this;
        }),
        (t.resetBeforeCursor = function (t, n) {
          if (
            (n === void 0 && (n = Number.MAX_SAFE_INTEGER),
            !v(t, this.getStart(t), u.AFTER))
          ) {
            var e = Math.max(0, this.getEnd(t) - 1),
              r = this.$5(t, e, u.BEFORE, 2, n);
            return this.$4({ before: Math.min(this.before, r) });
          }
          return this;
        }),
        e
      );
    })();
    function R(e, t, n) {
      if (e) {
        var r = t.get(e),
          o = t.indexOf(r);
        if (o !== -1) return o;
      }
      return C(n) === s.RECENT_AT_TOP ? 0 : t.length - 1;
    }
    ((l.RENDER_CURSOR = s), (l.RenderCursor = S));
  },
  98,
);
