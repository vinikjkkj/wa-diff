__d(
  "Form",
  [
    "DOM",
    "DOMQuery",
    "DTSG",
    "DTSGUtils",
    "DataStore",
    "FBLogger",
    "Input",
    "LSD",
    "PHPQuerySerializer",
    "Random",
    "SprinkleConfig",
    "URI",
    "getElementPosition",
    "isFacebookURI",
    "isNode",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "FileList" in window,
      c = "FormData" in window;
    function d(t) {
      var n = {};
      return (
        (e || (e = r("PHPQuerySerializer")))
          .serialize(t)
          .split("&")
          .forEach(function (e) {
            if (e) {
              var t = /^([^=]*)(?:=(.*))?$/.exec(e),
                o = (s || (s = r("URI"))).decodeComponent(t[1]),
                a = t[2] !== void 0,
                i = a ? (s || (s = r("URI"))).decodeComponent(t[2]) : null;
              n[o] = i;
            }
          }),
        n
      );
    }
    var m = {
      getInputs: function (t) {
        return (
          t === void 0 && (t = document),
          [].concat(
            o("DOMQuery").scry(t, "input"),
            o("DOMQuery").scry(t, "select"),
            o("DOMQuery").scry(t, "textarea"),
            o("DOMQuery").scry(t, "button"),
          )
        );
      },
      getInputsByName: function (t) {
        var e = {};
        return (
          m.getInputs(t).forEach(function (t) {
            var n = e[t.name];
            e[t.name] = n === void 0 ? t : [t].concat(n);
          }),
          e
        );
      },
      getSelectValue: function (t) {
        return t.options[t.selectedIndex].value;
      },
      setSelectValue: function (t, n) {
        for (var e = 0; e < t.options.length; ++e)
          if (t.options[e].value === n) {
            t.selectedIndex = e;
            break;
          }
      },
      getRadioValue: function (t) {
        for (var e = 0; e < t.length; e++) if (t[e].checked) return t[e].value;
        return null;
      },
      getElements: function (t) {
        return t.tagName === "FORM" && t.elements !== t
          ? Array.from(t.elements)
          : m.getInputs(t);
      },
      getAttribute: function (t, n) {
        return (t.getAttributeNode(n) || {}).value || null;
      },
      setDisabled: function (t, n) {
        m.getElements(t).forEach(function (e) {
          if (e.disabled !== void 0) {
            var t = r("DataStore").get(e, "origDisabledState");
            n
              ? (t === void 0 &&
                  r("DataStore").set(e, "origDisabledState", e.disabled),
                (e.disabled = n))
              : t === !1 && (e.disabled = !1);
          }
        });
      },
      forEachValue: function (t, n, r) {
        (m.getElements(t).forEach(function (e) {
          if (
            !(!e.name || e.disabled) &&
            e.type !== "submit" &&
            !(
              e.type === "reset" ||
              e.type === "button" ||
              e.type === "image"
            ) &&
            !((e.type === "radio" || e.type === "checkbox") && !e.checked)
          ) {
            if (e.nodeName === "SELECT") {
              for (var t = 0, n = e.options.length; t < n; t++) {
                var a = e.options[t];
                a.selected && r("select", e.name, a.value);
              }
              return;
            }
            if (e.type === "file") {
              if (u)
                for (var i = e.files, l = 0; l < i.length; l++)
                  r("file", e.name, i.item(l));
              return;
            }
            r(e.type, e.name, o("Input").getValue(e));
          }
        }),
          n &&
            n.name &&
            n.type === "submit" &&
            o("DOMQuery").contains(t, n) &&
            o("DOMQuery").isNodeOfType(n, ["input", "button"]) &&
            r("submit", n.name, n.value));
      },
      createFormData: function (t, n) {
        if (!c) return null;
        var e = new FormData();
        if (t)
          if (r("isNode")(t))
            m.forEachValue(t, n, function (t, n, r) {
              e.append(n, r);
            });
          else {
            var o = d(t);
            for (var a in o) o[a] == null ? e.append(a, "") : e.append(a, o[a]);
          }
        return e;
      },
      serialize: function (t, n) {
        var e = {};
        return (
          m.forEachValue(t, n, function (t, n, r) {
            t !== "file" && m._serializeHelper(e, n, r);
          }),
          m._serializeFix(e)
        );
      },
      _serializeHelper: function (t, n, r) {
        var e = Object.prototype.hasOwnProperty,
          o = /([^\]]+)\[([^\]]*)\](.*)/.exec(n);
        if (o) {
          if (!t[o[1]] || !e.call(t, o[1])) {
            var a;
            if (((t[o[1]] = a = {}), t[o[1]] !== a)) return;
          }
          var i = 0;
          if (o[2] === "") for (; t[o[1]][i] !== void 0; ) i++;
          else i = o[2];
          o[3] === ""
            ? (t[o[1]][i] = r)
            : m._serializeHelper(t[o[1]], i.concat(o[3]), r);
        } else t[n] = r;
      },
      _serializeFix: function (t) {
        for (var e in t)
          t[e] instanceof Object && (t[e] = m._serializeFix(t[e]));
        var n = Object.keys(t);
        if (n.length === 0 || n.some(isNaN)) return t;
        n.sort(function (e, t) {
          return Number(e) - Number(t);
        });
        var r = 0,
          o = n.every(function (e) {
            return +e === r++;
          });
        return o
          ? n.map(function (e) {
              return t[e];
            })
          : t;
      },
      post: function (t, n, a, i) {
        i === void 0 && (i = !0);
        var e = new (s || (s = r("URI")))(t),
          l = document.createElement("form");
        ((l.action = e.toString()),
          (l.method = "POST"),
          (l.style.display = "none"));
        var u = !r("isFacebookURI")(e);
        if (a) {
          if (u && ((l.rel = "noreferrer"), a === "_blank")) {
            a = btoa(r("Random").uint32());
            var c = window.open("about:blank", a);
            c !== void 0 && (c.opener = null);
          }
          l.target = a;
        }
        if (i && !u && e.getSubdomain() !== "apps") {
          var d = o("DTSG").getToken();
          (d &&
            ((n.fb_dtsg = d),
            r("SprinkleConfig").param_name &&
              (n[r("SprinkleConfig").param_name] =
                r("DTSGUtils").getNumericValue(d))),
            r("LSD").token &&
              ((n.lsd = r("LSD").token),
              r("SprinkleConfig").param_name &&
                !d &&
                (n[r("SprinkleConfig").param_name] = r(
                  "DTSGUtils",
                ).getNumericValue(r("LSD").token))));
        }
        return (
          m.createHiddenInputs(n, l),
          o("DOMQuery").getRootElement().appendChild(l),
          l.submit(),
          !1
        );
      },
      post_UNSAFE_LET_ANYONE_IMPERSONATE_THE_USER_FOR_THESE_WRITES: function (
        t,
        n,
        r,
      ) {
        m.post(t, n, r);
      },
      createHiddenInputs: function (t, n, o, a) {
        (a === void 0 && (a = !1), (o = o || {}));
        var e = d(t);
        for (var i in e)
          if (e[i] !== null)
            if (o[i] && a) o[i].value = e[i];
            else {
              var l = r("DOM").create("input", {
                type: "hidden",
                name: i,
                value: e[i],
              });
              ((o[i] = l), n.appendChild(l));
            }
        return o;
      },
      getFirstElement: function (t, n) {
        n === void 0 &&
          (n = [
            'input[type="text"]',
            "textarea",
            'input[type="password"]',
            'input[type="button"]',
            'input[type="submit"]',
          ]);
        for (var e = [], a = 0; a < n.length; a++) {
          e = o("DOMQuery").scry(t, n[a]);
          for (var i = 0; i < e.length; i++) {
            var l = e[i];
            try {
              var s = r("getElementPosition")(l);
              if (s.y > 0 && s.x > 0) return l;
            } catch (e) {}
          }
        }
        return null;
      },
      focusFirst: function (t) {
        var e = m.getFirstElement(t);
        return e ? (e.focus(), !0) : !1;
      },
    };
    i.exports = m;
  },
  34,
);
