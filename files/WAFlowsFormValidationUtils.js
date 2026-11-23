__d(
  "WAFlowsFormValidationUtils",
  [
    "fbt",
    "invariant",
    "WAFlowsComponentConstants",
    "WAFlowsDocumentPicker.react",
    "WAFlowsIsDateUnavailable",
    "WAFlowsMediaPicker.react",
    "WAFlowsNativeMediaUploadTypes",
    "WAFlowsPhotoPicker.react",
    "WAFlowsStateParser",
    "WAFlowsTextInput.react",
    "WAFlowsTypeGuards",
    "WAFlowsTypes",
    "justknobx",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = function (t) {
        return t === void 0 || Object.values(t).filter(m).length === 0;
      },
      c = function (t, n, r) {
        var e;
        (r === void 0 && (r = {}), n != null || u(0, 72638));
        var o = (e = t.external[n].form) != null ? e : {};
        return babelHelpers.extends({}, r, o);
      },
      d = function (t, n) {
        return t.reduce(function (e, t) {
          var r = t.name;
          return t.type === "If"
            ? o("WAFlowsStateParser").mergeDeep(e, J(t, n))
            : t.type === "Switch"
              ? o("WAFlowsStateParser").mergeDeep(e, Z(t, n))
              : (r == null || (e[r] = p(t, n[r])), e);
        }, {});
      },
      m = function (t) {
        if (
          typeof t == "object" &&
          t !== null &&
          o("WAFlowsTypeGuards").isObjectWithStringProperties(t)
        ) {
          var e = Object.keys(t);
          return e.length > 0 && t[e[0]].trim().length > 0;
        }
        return (
          t === !0 ||
          (t != null && typeof t == "object") ||
          (typeof t == "string" && t.trim().length > 0)
        );
      },
      p = function (t, n) {
        var e, a, i;
        if (t.visible === !1) return !1;
        var l = r("justknobx")._("2512");
        if (
          t.type !== o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CALENDAR_PICKER
        ) {
          if (l === !0) {
            if (V(t, n)) return I(t);
          } else if (U(t, n)) return I(t);
        }
        var s =
          ((e = {}),
          (e.TextInput = function () {
            return b(t, n);
          }),
          (e.DatePicker = function () {
            return v(t, n);
          }),
          (e.RadioButtonsGroup = function () {
            return null;
          }),
          (e.CheckboxGroup = function () {
            return S(t, n);
          }),
          (e.ChipsSelector = function () {
            return r("justknobx")._("5194") ? S(t, n) : null;
          }),
          (e.SeatSelector = function () {
            return S(t, n);
          }),
          (e.Dropdown = function () {
            return k(t, n);
          }),
          (e.PhotoPicker = function () {
            return L(t, n);
          }),
          (e.DocumentPicker = function () {
            return E(t, n);
          }),
          (e.CalendarPicker = function () {
            return N(t, n);
          }),
          e);
        return (a = (i = s[t.type]) == null ? void 0 : i.call(s)) != null
          ? a
          : void 0;
      },
      _ = function (t) {
        return /(?:[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g.test(
          t,
        );
      };
    function f(e) {
      return (
        Array.isArray(e) &&
        e.every(function (e) {
          return typeof e == "string";
        })
      );
    }
    var g = function (t, n) {
        var e = function (t) {
            return t != null ? String(t) : "";
          },
          r = function (o) {
            return o.some(function (r) {
              return (
                e(t == null ? void 0 : t[r]) !== e(n == null ? void 0 : n[r])
              );
            });
          },
          o = Object.keys(t != null ? t : {}),
          a = Object.keys(n != null ? n : {});
        return r(o) || r(a);
      },
      h = function (t, n) {
        if (t.length !== n.length) return !1;
        for (var e = 0; e < t.length; e++) if (!C(t[e], n[e])) return !1;
        return !0;
      },
      y = function (t, n) {
        var e = Object.keys(t),
          r = Object.keys(n);
        if (e.length !== r.length) return !1;
        for (var o of e) if (!C(t[o], n[o])) return !1;
        return !0;
      },
      C = function (t, n) {
        return t === null && n === null
          ? !0
          : t === null || n === null || typeof t != typeof n
            ? !1
            : Array.isArray(t)
              ? Array.isArray(n)
                ? h(t, n)
                : !1
              : typeof t == "object"
                ? typeof n != "object"
                  ? !1
                  : y(t, n)
                : t === n;
      },
      b = function (t, n) {
        var e = typeof n == "string" ? n.trim() : void 0;
        return H(t, e)
          ? x(t)
          : G(t, e)
            ? $(t)
            : z(t, e)
              ? w()
              : K(t, e)
                ? B()
                : j(t, e)
                  ? A()
                  : Q(t, e)
                    ? F()
                    : X(t, e)
                      ? O(String(t.label))
                      : "";
      },
      v = function (t, n) {
        return Y(t, n) ? q() : "";
      },
      S = function (t, n) {
        var e, r, o, a, i;
        if (t.enabled === !1) return !1;
        var l =
            typeof n != "boolean" && (e = n == null ? void 0 : n.length) != null
              ? e
              : 0,
          s = (r = t.minSelectedItems) != null ? r : 0,
          u =
            (o =
              (a = t.maxSelectedItems) != null
                ? a
                : (i = t.dataSource) == null
                  ? void 0
                  : i.length) != null
              ? o
              : Number.MAX_SAFE_INTEGER;
        return l < s || l > u;
      },
      R = function (t) {
        var e;
        return t != null && typeof t == "object" && !Array.isArray(t)
          ? (e = r("unsafeCast")(t)) == null
            ? void 0
            : e.__wa_flows_uploaded_media__
          : [];
      },
      L = function (t, n) {
        var e, r;
        if (t.enabled === !1) return "";
        var a = R(n),
          i = Array.isArray(a) ? a : [],
          l = i.some(function (e) {
            return (
              e.upload_state ===
              o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.ERROR
            );
          });
        if (l) return s._(/*BTDS*/ "");
        var u = i.every(function (e) {
          return (
            e.upload_state ===
            o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.SUCCESS
          );
        });
        if (!u) return o("WAFlowsMediaPicker.react").HIDE_ERROR_MESSAGE_HINT;
        var c =
            (e = t.minUploadedPhotos) != null
              ? e
              : o("WAFlowsPhotoPicker.react").DEFAULT_MIN_UPLOADED_PHOTO,
          d =
            (r = t.maxUploadedPhotos) != null
              ? r
              : o("WAFlowsPhotoPicker.react").DEFAULT_MAX_UPLOADED_PHOTO;
        return i.length < c
          ? c === 1
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "")
          : i.length > d
            ? s._(/*BTDS*/ "")
            : "";
      },
      E = function (t, n) {
        var e, r;
        if (t.enabled === !1) return "";
        var a = R(n),
          i = Array.isArray(a) ? a : [],
          l = i.some(function (e) {
            return (
              e.upload_state ===
              o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.ERROR
            );
          });
        if (l) return s._(/*BTDS*/ "");
        var u = i.every(function (e) {
          return (
            e.upload_state ===
            o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.SUCCESS
          );
        });
        if (!u) return o("WAFlowsMediaPicker.react").HIDE_ERROR_MESSAGE_HINT;
        var c =
            (e = t.minUploadedDocuments) != null
              ? e
              : o("WAFlowsDocumentPicker.react").DEFAULT_MIN_UPLOADED_DOCUMENT,
          d =
            (r = t.maxUploadedDocuments) != null
              ? r
              : o("WAFlowsDocumentPicker.react").DEFAULT_MAX_UPLOADED_DOCUMENT;
        return i.length < c
          ? c === 1
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "")
          : i.length > d
            ? s._(/*BTDS*/ "")
            : "";
      },
      k = function (t, n) {
        var e;
        return (
          n !== void 0 &&
          n !== "" &&
          Array.isArray(t.dataSource) &&
          !(
            (e = t.dataSource) != null &&
            e.some(function (e) {
              return e.id === n;
            })
          )
        );
      },
      I = function (t) {
        switch (t.type) {
          case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CHECKBOX_GROUP:
          case o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RADIOBUTTONS_GROUP:
            return s._(/*BTDS*/ "");
          default:
            return s._(/*BTDS*/ "", [s._param("label", String(t.label))]);
        }
      },
      T = function (t) {
        var e;
        return (e = t.minChars) != null ? e : 0;
      },
      D = function (t) {
        var e;
        return (e = t.maxChars) != null
          ? e
          : o("WAFlowsComponentConstants").TEXT_INPUT_MAX_CHARS_DEFAULT;
      },
      x = function (t) {
        return P({
          label: String(t.label),
          limit: Number(T(t)) - 1,
          directionText: "longer",
        });
      },
      $ = function (t) {
        return P({
          label: String(t.label),
          limit: Number(D(t)) + 1,
          directionText: "shorter",
        });
      },
      P = function (t) {
        var e = t.directionText,
          n = t.label,
          r = t.limit;
        return e === "longer"
          ? s._(/*BTDS*/ "", [
              s._plural(r),
              s._param("label", n),
              s._param("min chars limit", r),
            ])
          : s._(/*BTDS*/ "", [
              s._plural(r),
              s._param("label", n),
              s._param("max chars limit", r),
            ]);
      },
      N = function (t, n) {
        if (t.mode === "range") {
          var e,
            o,
            a,
            i = (e = r("unsafeCast")(n)) != null ? e : {},
            l = i["end-date"],
            s = l === void 0 ? "" : l,
            u = i["start-date"],
            c = u === void 0 ? "" : u,
            d = (o = r("unsafeCast")(t.label)) != null ? o : {},
            m = d["end-date"],
            p = m === void 0 ? "" : m,
            _ = d["start-date"],
            f = _ === void 0 ? "" : _,
            g = (a = r("unsafeCast")(t.required)) != null ? a : {},
            h = g["end-date"],
            y = h === void 0 ? !1 : h,
            C = g["start-date"],
            b = C === void 0 ? !1 : C,
            v = M(t, c, s, "start", b, f),
            S = M(t, c, s, "end", y, p);
          return { "start-date": v, "end-date": S };
        } else
          return M(
            t,
            String(n != null ? n : ""),
            void 0,
            void 0,
            !!t.required,
            String(t.label),
          );
      },
      M = function (t, n, r, a, i, l) {
        i === void 0 && (i = !1);
        var e = a === "end" ? r : n;
        if (e == null || e.length === 0) return i ? W(l) : "";
        var s = t.includeDays,
          u = t.maxDate,
          c = t.maxDays,
          d = t.minDate,
          m = t.minDays,
          p = t.unavailableDates;
        return o("WAFlowsIsDateUnavailable").isDateUnavailable({
          date: n,
          endDate: r,
          source: a,
          unavailableDates: p,
          includeDays: s,
          minDate: d,
          maxDate: u,
          minDays: m,
          maxDays: c,
        })
          ? q()
          : "";
      },
      w = function () {
        return s._(/*BTDS*/ "");
      },
      A = function () {
        return s._(/*BTDS*/ "");
      },
      F = function () {
        return s._(/*BTDS*/ "");
      },
      O = function (t) {
        return r("justknobx")._("8178")
          ? s._(/*BTDS*/ "", [s._param("label", t)])
          : s._(/*BTDS*/ "", [s._param("label", t)]);
      },
      B = function () {
        return s._(/*BTDS*/ "");
      },
      W = function (t) {
        return s._(/*BTDS*/ "", [s._param("label", t)]);
      },
      q = function () {
        return s._(/*BTDS*/ "");
      },
      U = function (t, n) {
        return (
          t.required === !0 &&
          (typeof n == "boolean"
            ? !n
            : typeof n == "string"
              ? !n.trim().length
              : !(n != null && n.length))
        );
      };
    function V(e, t) {
      return e.required !== !0
        ? !1
        : typeof t == "boolean"
          ? !t
          : typeof t == "string"
            ? !t.trim().length
            : t != null &&
                typeof t == "object" &&
                Object.prototype.hasOwnProperty.call(
                  t,
                  "__wa_flows_uploaded_media__",
                ) &&
                Array.isArray(t.__wa_flows_uploaded_media__)
              ? !t.__wa_flows_uploaded_media__.length
              : !(t != null && t.length);
    }
    var H = function (t, n) {
        return n == null || n.length === 0 ? !1 : n.length < Number(T(t));
      },
      G = function (t, n) {
        return n == null ? !1 : n.length > Number(D(t));
      },
      z = function (t, n) {
        var e =
          /^([a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$|^$)/;
        return t.inputType === "email" && typeof n == "string" && n.length > 0
          ? !e.test(n)
          : !1;
      },
      j = function (t, n) {
        var e = /^(\+[0-9]+[* .-]*)?(\([0-9]+\)[ .-]*)?([0-9][0-9 .-]+[0-9])*$/;
        return t.inputType === "phone" && typeof n == "string" && n.length > 0
          ? !e.test(n)
          : !1;
      },
      K = function (t, n) {
        var e = /^[0-9]*$/;
        return t.inputType === "passcode" &&
          typeof n == "string" &&
          n.length > 0
          ? !e.test(n)
          : !1;
      },
      Q = function (t, n) {
        var e =
          /^[-+]?(?:(?:0\d*|[1-9]\d*(?:,\d{3})*|\d+)(?:\.\d+)?|\d+,\d+)(?:[eE][-+]?\d+)?$/;
        return t.inputType === "number" && typeof n == "string" && n.length > 0
          ? !e.test(n)
          : !1;
      },
      X = function (t, n) {
        var e,
          r = [
            String(
              (e = o("WAFlowsTextInput.react")).WAFlowJSONTextInputType.TEXT,
            ),
            String(e.WAFlowJSONTextInputType.PASSWORD),
            String(e.WAFlowJSONTextInputType.PASSCODE),
            String(e.WAFlowJSONTextInputType.NUMBER),
          ];
        if (!r.includes(t.inputType)) return !1;
        var a = t.pattern;
        if (typeof n != "string" || typeof a != "string") return !1;
        try {
          var i = new RegExp(a != null ? a : "").test(n);
          return !i;
        } catch (e) {
          return !1;
        }
      },
      Y = function (t, n) {
        var e;
        return (
          ((e = t.unavailableDates) == null ? void 0 : e.includes(n)) || !1
        );
      },
      J = function (t, n) {
        var e = t.condition,
          r = t.elseStatement,
          o = t.then;
        return e === !0 && o != null ? d(o, n) : r != null ? d(r, n) : {};
      },
      Z = function (t, n) {
        var e = t.cases,
          r = t.value;
        return Object.prototype.hasOwnProperty.call(e, r)
          ? d(e[r], n)
          : Object.prototype.hasOwnProperty.call(e, "default")
            ? d(e.default, n)
            : {};
      };
    ((l.isFormValid = e),
      (l.getInitValues = c),
      (l.getInitErrors = d),
      (l.existsError = m),
      (l.getError = p),
      (l.stringContainsEmoji = _),
      (l.isComponentValueArrayOfStr = f),
      (l.hasModelEqualityChanged = g),
      (l.isEqual = C));
  },
  226,
);
