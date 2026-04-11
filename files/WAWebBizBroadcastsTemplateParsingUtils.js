__d(
  "WAWebBizBroadcastsTemplateParsingUtils",
  [
    "fbt",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebBizBroadcastsTypedError",
    "WAWebBizBroadcastsValidationUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = s._(/*BTDS*/ "Phone number").toString(),
      u = s._(/*BTDS*/ "Full name").toString(),
      c = new Set(["phone", "phone number", e.toLowerCase()]),
      d = ["name", "full name", u.toLowerCase()],
      m = ["firstname", "first name"],
      p = new Set(d),
      _ = new Set(m),
      f = new Set([].concat(m, d)),
      g = new Set(["lastname", "last name"]);
    function h() {
      var t = o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit(),
        n = s
          ._(
            /*BTDS*/ "Enter each recipient's full name and phone number on a separate row. You can add up to {recipient-limit} recipients to an audience.",
            [s._param("recipient-limit", t)],
          )
          .toString(),
        r = s._(/*BTDS*/ "Add a name here").toString(),
        a = s._(/*BTDS*/ "Add a phone number here").toString();
      return n + "\n\n" + u + "," + e + "\n\n" + r + "," + a;
    }
    function y() {
      return {
        download: "business_broadcast_audience_template.csv",
        href: "data:application/csv," + encodeURI(h()),
      };
    }
    function C() {
      var e = y();
      return { download: e.download, href: e.href };
    }
    function b(e, t) {
      for (var n in e) {
        var r = n.toLowerCase();
        if (t.has(r)) return n;
      }
    }
    function v(e) {
      for (var t of e.slice(0, 3)) {
        var n = b(t, _) != null,
          r = b(t, g) != null;
        if (n || r) return "dual";
        var o = b(t, p) != null;
        if (o) return "single";
      }
      return "single";
    }
    function S(e, t) {
      var n = b(e, t);
      if (n != null) return e[n];
    }
    function R(e, t) {
      for (var n in e) {
        var r = n.toLowerCase();
        if (t.has(r) && e[n] != null) return String(e[n]);
      }
      return "";
    }
    function L(e) {
      return R(e, f);
    }
    function E(e) {
      return R(e, c);
    }
    function k(e) {
      return typeof e != "string" ? !1 : c.has(e.toLowerCase().trim());
    }
    function I(e) {
      var t = [],
        n = v(e),
        r = [];
      e.forEach(function (e, n) {
        var a = S(e, c),
          i = o(
            "WAWebBizBroadcastsValidationUtils",
          ).validateAndFormatPhoneNumber(String(a));
        if (
          i.status ===
          o("WAWebBizBroadcastsValidationUtils").ValidationStatus.INVALID
        ) {
          t.push({ errorType: i.type, rowData: e, rowIndex: n });
          return;
        }
        r.push({ originalIndex: n, phoneResult: i, row: e });
      });
      var a = new Map(),
        i = [];
      r.forEach(function (e) {
        var n = e.originalIndex,
          r = e.phoneResult,
          l = e.row,
          s = r.value;
        s != null && a.has(s)
          ? t.push({
              errorType: o("WAWebBizBroadcastsTypedError").PhoneError.DUPLICATE,
              rowData: l,
              rowIndex: n,
            })
          : s != null &&
            (a.set(s, n), i.push({ originalIndex: n, phoneResult: r, row: l }));
      });
      var l = i.map(function (e) {
        var t = e.originalIndex,
          r = e.phoneResult,
          a = e.row,
          i = void 0,
          l = void 0;
        if (n === "single") {
          var s = S(a, p),
            u = o("WAWebBizBroadcastsValidationUtils").sanitizeName(s),
            c = "";
          (u.status ===
          o("WAWebBizBroadcastsValidationUtils").ValidationStatus.VALID
            ? (c = u.value != null ? u.value : "")
            : (c = r.value != null ? r.value : ""),
            (i = c !== "" ? c : void 0));
        } else {
          var d = S(a, _),
            m = S(a, g),
            f = "",
            h = "",
            y = null,
            C = null;
          (d != null &&
            ((y = o("WAWebBizBroadcastsValidationUtils").sanitizeName(d)),
            y.status ===
              o("WAWebBizBroadcastsValidationUtils").ValidationStatus.VALID &&
              (f = y.value != null ? y.value : "")),
            m != null &&
              ((C = o("WAWebBizBroadcastsValidationUtils").sanitizeName(m)),
              C.status ===
                o("WAWebBizBroadcastsValidationUtils").ValidationStatus.VALID &&
                (h = C.value != null ? C.value : "")),
            f !== "" || h !== ""
              ? ((i = f !== "" ? f : void 0), (l = h !== "" ? h : void 0))
              : (i = r.value != null ? r.value : void 0));
        }
        var b = { phone: r.value != null ? r.value : "", rowIndex: t };
        return (
          i != null && (b.firstName = i),
          l != null && (b.lastName = l),
          b
        );
      });
      return { errors: t, validContacts: l };
    }
    ((l.getTemplateLinkProps = y),
      (l.getTemplateLinkPropsWithURL = C),
      (l.extractName = L),
      (l.extractPhone = E),
      (l.isPhoneFieldName = k),
      (l.parseContactData = I));
  },
  226,
);
