__d(
  "WAWebInitialsProfilePicture.story",
  [
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebInitialsFromNameUtils",
    "WAWebInitialsProfilePicture.react",
    "WAWebPerformantSelect.react",
    "WAWebShowroomUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebSelect",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = [
        {
          shortName: "\u0917\u094B\u0930\u094D\u0915\u0940",
          name: "\u0917\u094B\u0930\u094D\u0915\u0940 \u092C\u0915\u094D\u0936\u0940",
          pushname: "\u092C\u0915\u094D\u0936\u0940",
        },
        {
          shortName: "\u0E15\u0E23\u0E35",
          name: "\u0E15\u0E23\u0E35 \u0E14\u0E23\u0E38\u0E13\u0E1E\u0E31\u0E19\u0E18\u0E4C",
          pushname: "\u092C\u0915\u094D\u0936\u0940",
        },
        { shortName: "Leo", name: "Leo Vincente", pushname: "Leo Vin" },
        {
          shortName: "\u0645\u062D\u0645\u062F",
          name: "\u0645\u062D\u0645\u062F\u0639\u062B\u0645\u0627\u0646",
          pushname: "\u0645\u062D\u0645\u062F",
        },
        {
          shortName: "\u05D3\u05E0\u05D4",
          name: "\u05D3\u05E0\u05D4 \u05DB\u05D4\u05DF",
          pushname: "\u05D3\u05E0\u05D4",
        },
        {
          shortName: "\u0A8B\u0AB7\u0AAD",
          name: "\u0A8B\u0AB7\u0AAD \u0AB6\u0ABE\u0AB9",
          pushname: "\u0A8B\u0AB7\u0AAD",
        },
        {
          shortName: "\xC9na\xEBl",
          name: "\xC9na\xEBl \xC8milie",
          pushname: "\xC9na\xEBl",
        },
        {
          shortName: "\u0418\u0440\u0438\u043D\u0430",
          name: "\u0418\u0440\u0438\u043D\u0430 \u041B\u044E\u0434\u043C\u0438\u043B\u0430",
          pushname: "\u0418\u0440\u0438\u043D\u0430",
        },
        {
          shortName: "\u099A\u09C8\u09A4\u09BE\u09B2\u09BF",
          name: "\u099A\u09C8\u09A4\u09BE\u09B2\u09BF \u09AE\u099C\u09C1\u09AE\u09A6\u09BE\u09B0",
          pushname: "\u099A\u09C8\u09A4\u09BE\u09B2\u09BF",
        },
        {
          shortName: "\u78CA\u78CA",
          name: "\u6B27\u9633\u78CA\u78CA",
          pushname: "\u78CA\u78CA",
        },
        {
          shortName: "Leo",
          name: "Leo \u0917\u094B\u0930\u094D\u0915\u0940",
          pushname: "\u0418\u0440\u0438\u043D\u0430",
        },
        {
          shortName: "\u05D3\u05E0\u05D4",
          name: "\u05D3\u05E0\u05D4 Leo",
          pushname: "\u0418\u0440\u0438\u043D\u0430",
        },
        {
          shortName: "Leo",
          name: "Leo \u05D3\u05E0\u05D4",
          pushname: "\u0418\u0440\u0438\u043D\u0430",
        },
        {
          shortName: "",
          name: "",
          pushname: "Empty since name is empty string",
        },
        { shortName: null, name: null, pushname: "\u05D3\u05E0\u05D4" },
      ];
    function d() {
      var e = o("react-compiler-runtime").c(20),
        t = u(null),
        n = t[0],
        r = t[1],
        a = u(null),
        i = a[0],
        l = a[1],
        c,
        d;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = Array.from({ length: 17 }, p)),
          (d = { defaultSelectedIndex: 0 }),
          (e[0] = c),
          (e[1] = d))
        : ((c = e[0]), (d = e[1]));
      var _ = o("useWAWebSelect").useSelect("Select color by number", c, d),
        f = _[0],
        g = _[1],
        h = f != null ? f : 1,
        y,
        C;
      if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        var b = o("WAWebShowroomUtils").getFilteredContacts();
        ((y = function (t) {
          var e = o("WAWebContactCollection").ContactCollection.get(t);
          (r(e), l(t));
        }),
          (C = b.map(m)),
          (e[2] = y),
          (e[3] = C));
      } else ((y = e[2]), (C = e[3]));
      var v = C,
        S;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { firstInitial: null, secondInitial: null }), (e[4] = S))
        : (S = e[4]);
      var R = S;
      if (n != null) {
        var L;
        (e[5] !== n
          ? ((L = o("WAWebInitialsFromNameUtils").getInitialsFromContact(n)),
            (e[5] = n),
            (e[6] = L))
          : (L = e[6]),
          (R = L));
      }
      var E;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { className: "x1vd4hg5" }), (e[7] = E))
        : (E = e[7]);
      var k;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { className: "x1anpbxc" }), (e[8] = k))
        : (k = e[8]);
      var I;
      e[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function (t) {
            return y(t);
          }),
          (e[9] = I))
        : (I = e[9]);
      var T;
      e[10] !== i
        ? ((T = s.jsx(
            "div",
            babelHelpers.extends({}, k, {
              children: s.jsx(o("WAWebPerformantSelect.react").Select, {
                items: v,
                initialSelection: i,
                defaultLabel: "Select a contact",
                onChange: I,
                menuMaxHeight: 400,
              }),
            }),
          )),
          (e[10] = i),
          (e[11] = T))
        : (T = e[11]);
      var D;
      e[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = { className: "x1pju0fl x10wjd1d x10l6tqk x1anpbxc" }),
          (e[12] = D))
        : (D = e[12]);
      var x;
      e[13] !== h || e[14] !== R
        ? ((x = s.jsx(
            "div",
            babelHelpers.extends({}, D, {
              children: s.jsx(
                o("WAWebInitialsProfilePicture.react").InitialsProfilePicture,
                { initialsData: R, backgroundColorId: h },
              ),
            }),
          )),
          (e[13] = h),
          (e[14] = R),
          (e[15] = x))
        : (x = e[15]);
      var $;
      return (
        e[16] !== g || e[17] !== T || e[18] !== x
          ? (($ = s.jsxs(
              "div",
              babelHelpers.extends({}, E, { children: [g, T, x] }),
            )),
            (e[16] = g),
            (e[17] = T),
            (e[18] = x),
            (e[19] = $))
          : ($ = e[19]),
        $
      );
    }
    function m(e) {
      return {
        itemKey: e.id.toString(),
        height: 40,
        menuItem: {
          optionId: e.id.toString(),
          primary: o("WAWebFrontendContactGetters").getDisplayName(e),
        },
      };
    }
    function p(e, t) {
      return t + 1;
    }
    function _() {
      var e,
        t = o("react-compiler-runtime").c(19),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = { firstInitial: null, secondInitial: null }), (t[0] = n))
        : (n = t[0]);
      var r = n,
        a = new Map(c.map(g)),
        i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = c.map(f)), (t[1] = i))
        : (i = t[1]);
      var l = i,
        d;
      if (t[2] !== ((e = l[0]) == null ? void 0 : e.itemKey)) {
        var m;
        ((d = function () {
          var e;
          return (e = l[0]) == null ? void 0 : e.itemKey;
        }),
          (t[2] = (m = l[0]) == null ? void 0 : m.itemKey),
          (t[3] = d));
      } else d = t[3];
      var p = u(d),
        _ = p[0],
        h = p[1],
        y;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function (t) {
            h(t);
          }),
          (t[4] = y))
        : (y = t[4]);
      var C = y;
      if (_ != null) {
        var b = a.get(_);
        b != null &&
          (r = o("WAWebInitialsFromNameUtils").getInitialsFromNames(b));
      }
      var v, S;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { className: "x1vd4hg5" }),
          (S = { className: "x1anpbxc" }),
          (t[5] = v),
          (t[6] = S))
        : ((v = t[5]), (S = t[6]));
      var R;
      t[7] !== C
        ? ((R = function (t) {
            return C(t);
          }),
          (t[7] = C),
          (t[8] = R))
        : (R = t[8]);
      var L;
      t[9] !== l || t[10] !== _ || t[11] !== R
        ? ((L = s.jsx(
            "div",
            babelHelpers.extends({}, S, {
              children: s.jsx(o("WAWebPerformantSelect.react").Select, {
                includeSearchInput: !0,
                items: l,
                initialSelection: _,
                defaultLabel: "Select a contact",
                onChange: R,
                menuMaxHeight: 400,
              }),
            }),
          )),
          (t[9] = l),
          (t[10] = _),
          (t[11] = R),
          (t[12] = L))
        : (L = t[12]);
      var E;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { className: "x1pju0fl x10wjd1d x10l6tqk x1anpbxc" }),
          (t[13] = E))
        : (E = t[13]);
      var k;
      t[14] !== r
        ? ((k = s.jsx(
            "div",
            babelHelpers.extends({}, E, {
              children: s.jsx(
                o("WAWebInitialsProfilePicture.react").InitialsProfilePicture,
                { initialsData: r, backgroundColorId: 1 },
              ),
            }),
          )),
          (t[14] = r),
          (t[15] = k))
        : (k = t[15]);
      var I;
      return (
        t[16] !== L || t[17] !== k
          ? ((I = s.jsxs(
              "div",
              babelHelpers.extends({}, v, { children: [L, k] }),
            )),
            (t[16] = L),
            (t[17] = k),
            (t[18] = I))
          : (I = t[18]),
        I
      );
    }
    function f(e) {
      var t = e.name,
        n = e.pushname,
        r = t != null && t !== "" ? t : "~ " + n;
      return { itemKey: r, height: 40, menuItem: { optionId: r, primary: r } };
    }
    function g(e) {
      var t = e.name,
        n = e.pushname,
        r = e.shortName;
      return [
        t != null && t !== "" ? t : "~ " + n,
        { name: t, shortName: r, pushname: n },
      ];
    }
    function h() {
      var e = o("react-compiler-runtime").c(24),
        t = u(""),
        n = t[0],
        r = t[1],
        a = u(""),
        i = a[0],
        l = a[1],
        c = n + " " + i,
        d;
      e[0] !== n || e[1] !== c
        ? ((d = o("WAWebInitialsFromNameUtils").getInitialsFromNames({
            shortName: n,
            name: c,
            pushname: null,
          })),
          (e[0] = n),
          (e[1] = c),
          (e[2] = d))
        : (d = e[2]);
      var m = d,
        p,
        _,
        f,
        g;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { className: "x1vd4hg5" }),
          (_ = { className: "x1anpbxc" }),
          (f = { className: "x1anpbxc" }),
          (g = s.jsx("span", { children: " First Name " })),
          (e[3] = p),
          (e[4] = _),
          (e[5] = f),
          (e[6] = g))
        : ((p = e[3]), (_ = e[4]), (f = e[5]), (g = e[6]));
      var h;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (t) {
            r(t.currentTarget.value);
          }),
          (e[7] = h))
        : (h = e[7]);
      var y;
      e[8] !== n
        ? ((y = s.jsxs(
            "div",
            babelHelpers.extends({}, f, {
              children: [
                g,
                s.jsx("input", { type: "text", value: n, onChange: h }),
              ],
            }),
          )),
          (e[8] = n),
          (e[9] = y))
        : (y = e[9]);
      var C, b;
      e[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { className: "x1anpbxc" }),
          (b = s.jsx("span", { children: " Last Name " })),
          (e[10] = C),
          (e[11] = b))
        : ((C = e[10]), (b = e[11]));
      var v;
      e[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (t) {
            l(t.currentTarget.value);
          }),
          (e[12] = v))
        : (v = e[12]);
      var S;
      e[13] !== i
        ? ((S = s.jsxs(
            "div",
            babelHelpers.extends({}, C, {
              children: [
                b,
                s.jsx("input", { type: "text", value: i, onChange: v }),
              ],
            }),
          )),
          (e[13] = i),
          (e[14] = S))
        : (S = e[14]);
      var R;
      e[15] !== S || e[16] !== y
        ? ((R = s.jsxs(
            "div",
            babelHelpers.extends({}, _, { children: [y, S] }),
          )),
          (e[15] = S),
          (e[16] = y),
          (e[17] = R))
        : (R = e[17]);
      var L;
      e[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { className: "x1pju0fl x10wjd1d x10l6tqk x1anpbxc" }),
          (e[18] = L))
        : (L = e[18]);
      var E;
      e[19] !== m
        ? ((E = s.jsx(
            "div",
            babelHelpers.extends({}, L, {
              children: s.jsx(
                o("WAWebInitialsProfilePicture.react").InitialsProfilePicture,
                { initialsData: m, backgroundColorId: 1 },
              ),
            }),
          )),
          (e[19] = m),
          (e[20] = E))
        : (E = e[20]);
      var k;
      return (
        e[21] !== R || e[22] !== E
          ? ((k = s.jsxs(
              "div",
              babelHelpers.extends({}, p, { children: [R, E] }),
            )),
            (e[21] = R),
            (e[22] = E),
            (e[23] = k))
          : (k = e[23]),
        k
      );
    }
    var y = {
      storyName: "WAWebInitialsProfilePicture",
      component: o("WAWebInitialsProfilePicture.react").InitialsProfilePicture,
      description:
        "\n          Renders initials from name maximum two initials.\n          It will show as blank circle if initials are not supported.\n          Example of not supported initials are symbols, numbers, emojis, etc..\n      ",
      examples: [
        {
          example: function () {
            return s.jsx(d, {});
          },
          title: "Initials based on saved contant",
          description:
            "Using saved contacts to display how initials component should behave",
        },
        {
          example: function () {
            return s.jsx(_, {});
          },
          title: "Initials from different characters alphabets",
          description:
            "Show intials for first name and last name from different languages/alphabets",
        },
        {
          example: function () {
            return s.jsx(h, {});
          },
          title: "Check initials based on input",
          description: "Show intials for input from First and last name value",
        },
      ],
    };
    l.default = y;
  },
  98,
);
