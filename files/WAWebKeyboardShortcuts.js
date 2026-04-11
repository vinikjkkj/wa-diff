__d(
  "WAWebKeyboardShortcuts",
  [
    "$InternalEnum",
    "WAWebActions",
    "WAWebCallCollection",
    "WAWebEnvironment",
    "WAWebPrivacyModeGating",
    "WAWebUA",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored(["Command", "Option", "Control"]),
      u = { mac: [s.Command, s.Control], windows: [s.Control, s.Option] },
      c = function () {
        return {
          mac:
            o("WAWebUA").UA.browser === "firefox"
              ? [s.Command, s.Control]
              : [s.Command],
          windows: [s.Option],
        };
      },
      d = [
        "ArrowUp",
        "ArrowDown",
        "w",
        "f",
        "]",
        "[",
        "A",
        "a",
        "H",
        "h",
        "Backspace",
        "Tab",
        "{",
        "}",
        "Escape",
        "n",
        "N",
        "p",
        ",",
        "/",
        "F",
        "E",
        "M",
        "P",
        "U",
        ">",
        "<",
        "e",
        "g",
        "G",
        "s",
        "S",
        "k",
        "l",
        "b",
        "B",
        "Delete",
        "DELETE",
        "r",
        "y",
        "R",
        "d",
        "i",
        "X",
        "I",
        "K",
        "Shift+7",
        "Shift+8",
        "Shift+.",
        "Shift+L",
        "Shift+Tab",
        "Enter",
        " ",
        "7",
        "8",
        ".",
        "*",
        "&",
        "t",
        "+",
        "=",
        "-",
        "_",
        "0",
        "F4",
        "v",
        "m",
      ];
    function m(e) {
      return d.includes(e) ? e : null;
    }
    function p(e) {
      var t = r("WAWebEnvironment").isWindows;
      switch (e) {
        case o("WAWebActions").Action.OPEN_NTH_CHAT:
          return [];
        case o("WAWebActions").Action.CONTACT_US:
          return [{ key: "H" }];
        case o("WAWebActions").Action.GO_TO_NEXT_CHAT: {
          var n = [
            { key: "Tab", hybridKey: "]", hybridModifiers: [s.Control] },
            { key: "}" },
          ];
          return (
            t &&
              n.push(
                { key: "}", hybridModifiers: [s.Control] },
                { key: "Tab", hybridModifiers: [s.Control] },
              ),
            n
          );
        }
        case o("WAWebActions").Action.GO_TO_PREV_CHAT: {
          var a = [
            { key: "Shift+Tab", hybridKey: "[", hybridModifiers: [s.Control] },
            { key: "{" },
          ];
          return (
            t &&
              a.push(
                { key: "{", hybridModifiers: [s.Control] },
                { key: "Shift+Tab", hybridModifiers: [s.Control] },
              ),
            a
          );
        }
        case o("WAWebActions").Action.CLOSE_CHAT: {
          var i = [{ key: "Escape", webModifiers: { mac: [], windows: [] } }];
          return (
            t &&
              i.push(
                { key: "w", hybridModifiers: [s.Control] },
                { key: "F4", hybridModifiers: [s.Control] },
              ),
            i
          );
        }
        case o("WAWebActions").Action.LOGOUT:
          return [];
        case o("WAWebActions").Action.OPEN_NEW_CHAT: {
          if (o("WAWebUA").UA.isSafari)
            return [
              { key: "N", webModifiers: { mac: [s.Control], windows: [] } },
            ];
          var l = [{ key: "n", hybridModifiers: [s.Control, s.Option] }];
          return (t && l.push({ key: "n", hybridModifiers: [s.Control] }), l);
        }
        case o("WAWebActions").Action.OPEN_NEW_GROUP:
          return [{ key: "N", hybridModifiers: [s.Control] }];
        case o("WAWebActions").Action.OPEN_PROFILE: {
          var u = [{ key: "p", hybridModifiers: [s.Control, s.Option] }];
          return (t && u.push({ key: "p", hybridModifiers: [s.Control] }), u);
        }
        case o("WAWebActions").Action.OPEN_SETTINGS:
          return [{ key: ",", hybridKey: "s", hybridModifiers: [s.Option] }];
        case o("WAWebActions").Action.SEARCH: {
          var d = [{ webKey: "/" }];
          return (
            t &&
              d.push({
                key: "f",
                hybridKey: "f",
                hybridModifiers: [s.Control],
              }),
            d
          );
        }
        case o("WAWebActions").Action.SEARCH_IN_CHAT:
          return [
            {
              key: "F",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
              hybridModifiers: [s.Control],
            },
          ];
        case o("WAWebActions").Action.TOGGLE_ARCHIVE:
          return [{ key: "E", hybridKey: "A", hybridModifiers: [s.Control] }];
        case o("WAWebActions").Action.TOGGLE_MUTE:
          return [{ key: "M", hybridModifiers: [s.Control] }];
        case o("WAWebActions").Action.TOGGLE_PIN:
          return [{ key: "P" }];
        case o("WAWebActions").Action.TOGGLE_UNREAD:
          return [{ key: "U", hybridModifiers: [s.Control] }];
        case o("WAWebActions").Action.INCREASE_PTT_SPEED:
          return [{ key: ">", hybridKey: ">", hybridModifiers: [] }];
        case o("WAWebActions").Action.DECREASE_PTT_SPEED:
          return [{ key: "<", hybridKey: "<", hybridModifiers: [] }];
        case o("WAWebActions").Action.OPEN_EMOJI_PANEL: {
          var m = [{ key: "e", hybridModifiers: [s.Control, s.Option] }];
          return (t && m.push({ key: "E", hybridModifiers: [s.Control] }), m);
        }
        case o("WAWebActions").Action.OPEN_GIF_PANEL: {
          var p = [{ key: "g", hybridModifiers: [s.Control, s.Option] }];
          return (t && p.push({ key: "G", hybridModifiers: [s.Control] }), p);
        }
        case o("WAWebActions").Action.OPEN_STICKER_PANEL: {
          var _ = [{ key: "s", hybridModifiers: [s.Control, s.Option] }];
          return (t && _.push({ key: "S", hybridModifiers: [s.Control] }), _);
        }
        case o("WAWebActions").Action.TOGGLE_STICKER_MAKER:
          return [{ key: "S" }];
        case o("WAWebActions").Action.TOGGLE_COMMAND_PALETTE:
          return [{ key: "k", webModifiers: c(), hybridModifiers: [s.Option] }];
        case o("WAWebActions").Action.LABEL_CHAT:
          return [{ key: "Shift+L", hybridModifiers: [s.Control, s.Command] }];
        case o("WAWebActions").Action.LOCK_SCREEN:
          return [{ key: "l", hybridModifiers: [s.Option] }];
        case o("WAWebActions").Action.TOGGLE_BOLD:
          return [
            {
              key: "b",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
            },
          ];
        case o("WAWebActions").Action.TOGGLE_ITALIC:
          return [
            {
              key: "i",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
            },
          ];
        case o("WAWebActions").Action.TOGGLE_STRIKETHROUGH:
          return [
            {
              key: "X",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
            },
          ];
        case o("WAWebActions").Action.TOGGLE_INLINE_CODE:
          return [
            {
              key: "I",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
            },
          ];
        case o("WAWebActions").Action.TOGGLE_CODE:
          return [
            {
              key: "K",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
            },
          ];
        case o("WAWebActions").Action.TOGGLE_NUMBERED_LIST:
          return [
            {
              key: "Shift+7",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
            },
          ];
        case o("WAWebActions").Action.TOGGLE_BULLETED_LIST:
          return [
            {
              key: "Shift+8",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
            },
          ];
        case o("WAWebActions").Action.TOGGLE_QUOTE:
          return [
            {
              key: "Shift+.",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
            },
          ];
        case o("WAWebActions").Action.TOGGLE_THEME:
          return [{ webKey: "t" }];
        case o("WAWebActions").Action.ZOOM_IN:
          return [
            {
              key: "+",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
            },
            {
              key: "=",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
            },
          ];
        case o("WAWebActions").Action.ZOOM_OUT:
          return [
            {
              key: "-",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
            },
            {
              key: "_",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
            },
          ];
        case o("WAWebActions").Action.ZOOM_RESET:
          return [
            {
              key: "0",
              webModifiers: { mac: [s.Command], windows: [s.Control] },
            },
          ];
        case o("WAWebActions").Action.OPEN_CHAT_INFO:
          return [
            {
              key: "i",
              hybridKey: "i",
              webModifiers: { mac: [s.Option], windows: [s.Option] },
              hybridModifiers: [s.Option],
            },
          ];
        case o("WAWebActions").Action.BLOCK_CHAT:
          return [
            {
              key: "B",
              hybridKey: "B",
              webModifiers: { mac: [s.Control], windows: [s.Control] },
              hybridModifiers: [s.Control],
            },
          ];
        case o("WAWebActions").Action.REPLY:
          return [
            {
              key: "r",
              hybridKey: "r",
              webModifiers: { mac: [s.Option], windows: [s.Option] },
              hybridModifiers: [s.Option],
            },
          ];
        case o("WAWebActions").Action.REPLY_PRIVATE:
          return [
            {
              key: "r",
              hybridKey: "r",
              webModifiers: {
                mac: [s.Control, s.Option],
                windows: [s.Control, s.Option],
              },
              hybridModifiers: [s.Control, s.Option],
            },
          ];
        case o("WAWebActions").Action.FORWARD:
          return [
            {
              key: "d",
              hybridKey: "d",
              webModifiers: {
                mac: [s.Control, s.Option],
                windows: [s.Control, s.Option],
              },
              hybridModifiers: [s.Control, s.Option],
            },
          ];
        case o("WAWebActions").Action.STAR_MESSAGE:
          return [
            {
              key: "8",
              hybridKey: "8",
              webModifiers: { mac: [s.Option], windows: [s.Option] },
              hybridModifiers: [s.Option],
            },
          ];
        case o("WAWebActions").Action.EDIT_LAST_MESSAGE:
          return [
            {
              key: "ArrowUp",
              hybridKey: "ArrowUp",
              webModifiers: { mac: [s.Command], windows: [s.Command] },
              hybridModifiers: [s.Control],
            },
          ];
        case o("WAWebActions").Action.OPEN:
          return [
            {
              key: "Enter",
              hybridKey: "Enter",
              hybridModifiers: [],
              webModifiers: { mac: [], windows: [] },
            },
          ];
        case o("WAWebActions").Action.OPEN_ATTACHMENT_DROPDOWN:
          return [
            {
              key: "a",
              hybridKey: "a",
              webModifiers: { mac: [s.Option], windows: [s.Option] },
              hybridModifiers: [s.Option],
            },
          ];
        case o("WAWebActions").Action.START_PTT_RECORDING:
          return [
            {
              key: "R",
              hybridKey: "R",
              webModifiers: {
                mac: [s.Control, s.Option],
                windows: [s.Control, s.Option],
              },
              hybridModifiers: [s.Control, s.Option],
            },
          ];
        case o("WAWebActions").Action.PAUSE_PTT_RECORDING:
          return [
            {
              key: "p",
              hybridKey: "p",
              webModifiers: { mac: [s.Option], windows: [s.Option] },
              hybridModifiers: [s.Option],
            },
          ];
        case o("WAWebActions").Action.SEND_PTT:
          return [
            {
              key: "Enter",
              hybridKey: "Enter",
              webModifiers: { mac: [s.Control], windows: [s.Control] },
              hybridModifiers: [s.Control],
            },
          ];
        case o("WAWebActions").Action.TOGGLE_PRIVACY_MODE:
          return o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()
            ? [{ key: "b" }]
            : [];
        case o("WAWebActions").Action.TOGGLE_CALL_CAMERA:
          return [{ key: "v" }];
        case o("WAWebActions").Action.TOGGLE_CALL_MUTE:
          return [{ key: "m" }];
        case o("WAWebActions").Action.SHOW_CALL_REACTIONS:
          return [{ key: "r" }];
        case o("WAWebActions").Action.TOGGLE_RAISE_HAND:
          return [{ key: "h" }];
        case o("WAWebActions").Action.START_SCREEN_SHARE:
          return [{ key: "s" }];
        case o("WAWebActions").Action.END_CALL:
          return [{ key: "w" }];
      }
    }
    var _ = C(Array.from((e = o("WAWebActions")).Action.members()), p),
      f = new Set([
        e.Action.TOGGLE_CALL_CAMERA,
        e.Action.TOGGLE_CALL_MUTE,
        e.Action.SHOW_CALL_REACTIONS,
        e.Action.TOGGLE_RAISE_HAND,
        e.Action.START_SCREEN_SHARE,
        e.Action.END_CALL,
      ]);
    function g(e) {
      var t = e.hybridModifiers,
        n = e.modifiers,
        a = n.mac,
        i = n.windows,
        l = o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC ? a : i,
        s = r("WAWebEnvironment").isWindows;
      return (s && t.length !== 0 && (l = t), l);
    }
    function h(e, t) {
      t === void 0 && (t = _);
      var n = e.altKey,
        o = e.ctrlKey,
        a = e.key,
        i = e.metaKey,
        l = e.shiftKey;
      if (!(a === "Control" || a === "Meta" || a === "Alt" || a === "Shift")) {
        var u = b(a, l),
          c = m(u);
        if (c != null) {
          var d = t[c];
          if (d) {
            var p = r("WAWebCallCollection").activeCall != null,
              h = void 0,
              y = void 0;
            for (var C of d) {
              var v = C.action,
                S = g(C),
                R = [
                  S.includes(s.Command) === i,
                  S.includes(s.Control) === o,
                  S.includes(s.Option) === n,
                ].every(Boolean);
              R && (p && f.has(v) ? (y = v) : h == null && (h = v));
            }
            return y != null ? y : h;
          }
        }
      }
    }
    function y(e) {
      if (e.ctrlKey) {
        if (e.deltaY < 0) return o("WAWebActions").Action.ZOOM_IN;
        if (e.deltaY > 0) return o("WAWebActions").Action.ZOOM_OUT;
      }
    }
    function C(e, t) {
      var n = {};
      return (
        e.forEach(function (e) {
          t(e).forEach(function (t) {
            var o = t.key,
              a = t.webKey,
              i = t.webModifiers,
              l = i === void 0 ? u : i,
              s = t.hybridModifiers,
              c = t.hybridKey,
              d = r("WAWebEnvironment").isWindows && c ? c : a != null ? a : o;
            d != null &&
              (n[d] || (n[d] = []),
              n[d].push({
                action: e,
                modifiers: l,
                hybridModifiers: s != null ? s : [],
              }));
          });
        }),
        Object.keys(n).forEach(function (e) {
          n[e] = n[e].sort(function (e, t) {
            return g(t).length - g(e).length;
          });
        }),
        n
      );
    }
    function b(e, t) {
      if (t) {
        if (
          e === "Tab" ||
          e === "Enter" ||
          e === "Backspace" ||
          e === " " ||
          e === "L"
        )
          return "Shift+" + e;
        if (e >= "a" && e <= "z") return e.toUpperCase();
        if (e === "Delete") return "DELETE";
        switch (e) {
          case "7":
          case "&":
            return "Shift+7";
          case "8":
          case "*":
            return "Shift+8";
          case ".":
          case ">":
            return "Shift+.";
        }
      }
      return /^[A-Z]$/.test(e) && !t ? e.toLowerCase() : e;
    }
    function v(e) {
      var t = p(e);
      if (t.length) {
        var n = r("WAWebEnvironment").isWindows,
          o = t[0],
          a = o.hybridKey,
          i = o.key,
          l = o.webKey;
        return n && a ? a : l != null ? l : i;
      }
    }
    function S(e) {
      var t = p(e);
      if (t.length) {
        var n = t[0],
          a = n.webModifiers,
          i = a === void 0 ? u : a,
          l = n.hybridModifiers,
          c = o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC,
          d = r("WAWebEnvironment").isWindows,
          m = c ? i.mac : i.windows;
        return (
          d && l && (m = l),
          m.map(function (e) {
            switch (e) {
              case s.Command:
                return "Cmd";
              case s.Option:
                return c ? "Option" : "Alt";
              case s.Control:
                return "Ctrl";
            }
          })
        );
      }
    }
    function R(e) {
      var t = [];
      for (var n of e)
        switch (n) {
          case "Cmd":
            t.push("Super");
            break;
          case "Ctrl":
            t.push("Control");
            break;
          case "Alt":
          case "Option":
            t.push("Option");
            break;
        }
      return t;
    }
    var L = {
      " ": "Space",
      DELETE: "Backspace",
      ArrowUp: "ArrowUp",
      ArrowDown: "ArrowDown",
      Tab: "Tab",
      Enter: "Enter",
      Backspace: "Backspace",
      Escape: "Escape",
      "/": "/",
      ",": ",",
      ".": ".",
      ">": ">",
      "<": "<",
      "]": "]",
      "[": "[",
      "{": "{",
      "}": "}",
      "|": "|",
      "*": "*",
      "&": "&",
      "+": "+",
      "=": "=",
      "-": "-",
      _: "_",
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      A: "A",
      B: "B",
      C: "C",
      D: "D",
      E: "E",
      F: "F",
      G: "G",
      H: "H",
      I: "I",
      J: "J",
      K: "K",
      L: "L",
      M: "M",
      N: "N",
      O: "O",
      P: "P",
      Q: "Q",
      R: "R",
      S: "S",
      T: "T",
      U: "U",
      V: "V",
      W: "W",
      X: "X",
      Y: "Y",
      Z: "Z",
      a: "A",
      b: "B",
      c: "C",
      d: "D",
      e: "E",
      f: "F",
      g: "G",
      h: "H",
      i: "I",
      j: "J",
      k: "K",
      l: "L",
      m: "M",
      n: "N",
      o: "O",
      p: "P",
      q: "Q",
      r: "R",
      s: "S",
      t: "T",
      u: "U",
      v: "V",
      w: "W",
      x: "X",
      y: "Y",
      z: "Z",
    };
    function E(e) {
      var t;
      if (e.startsWith("Shift+")) {
        var n,
          r = e.substring(6);
        return (n = L[r]) != null ? n : null;
      }
      return (t = L[e]) != null ? t : null;
    }
    function k(e) {
      var t = v(e);
      if (!t) return null;
      var n = E(t);
      if (!n) return null;
      var r = S(e),
        o = r ? R(r) : [],
        a = t.startsWith("Shift+") || (t.length === 1 && t.toLowerCase() !== t);
      return (
        a && !o.includes("Shift") && o.push("Shift"),
        { modifiers: o.length > 0 ? o : void 0, shortcutKeys: [n] }
      );
    }
    ((l.Modifier = s),
      (l.getAction = h),
      (l.getActionFromMouseEvent = y),
      (l.buildShortcutMap = C),
      (l.getShortcutKey = v),
      (l.getShortcutDisplayModifiers = S),
      (l.getWDSShortcuts = k));
  },
  98,
);
