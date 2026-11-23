__d(
  "WAWebGroupEmailInviteComposerUtils",
  ["fbt", "WAWebEmailInviteCSVParser"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = m(t);
      if (
        n.some(function (e) {
          return !o("WAWebEmailInviteCSVParser").EMAIL_INVITE_REGEX.test(e);
        })
      )
        return { emails: [].concat(e), error: s._(/*BTDS*/ "") };
      var r = g(e, n);
      return r.length >
        o("WAWebEmailInviteCSVParser").MAX_EMAIL_INVITE_RECIPIENTS
        ? {
            emails: [].concat(e),
            error: s._(/*BTDS*/ "", [
              s._param(
                "maximum",
                o("WAWebEmailInviteCSVParser").MAX_EMAIL_INVITE_RECIPIENTS,
                [0],
              ),
            ]),
          }
        : { emails: r, error: null };
    }
    function u(e) {
      if (e == null) return null;
      var t = e.getData("text/plain");
      return c(t) ? t : null;
    }
    function c(e) {
      return /[,\r\n]/.test(e) || m(e).length > 1;
    }
    function d(t, n) {
      var r,
        a = m(n),
        i = a.filter(function (e) {
          return o("WAWebEmailInviteCSVParser").EMAIL_INVITE_REGEX.test(e);
        }),
        l = a.filter(function (e) {
          return !o("WAWebEmailInviteCSVParser").EMAIL_INVITE_REGEX.test(e);
        }),
        s = e(t, i.join(",")),
        u = s.error == null ? l.join(", ") : n.replace(/[\r\n]+/g, ",");
      return {
        emails: s.emails,
        draft: u,
        error: (r = s.error) != null ? r : e([], u).error,
      };
    }
    function m(e) {
      return e
        .split(/[\s,;]+/)
        .map(function (e) {
          return e.trim();
        })
        .filter(Boolean);
    }
    function p(e, t) {
      if (t.status === "FAILURE") {
        var n;
        return t.error_reason === "INVALID_EMAIL_BATCH"
          ? {
              invalid: [],
              retry: [].concat(e),
              skipped: [],
              unconfirmed: [],
              errorReason: null,
            }
          : {
              invalid: [],
              retry: [],
              skipped: [],
              unconfirmed: [],
              errorReason: (n = t.error_reason) != null ? n : "UNKNOWN_FAILURE",
            };
      }
      return t.status !== "SUCCESS" ? _(e) : y(e, t.results);
    }
    function _(e) {
      return {
        invalid: [],
        retry: [],
        skipped: [],
        unconfirmed: [].concat(e),
        errorReason: null,
      };
    }
    function f(e) {
      return e == null
        ? null
        : e.unconfirmed.length > 0
          ? s._(/*BTDS*/ "")
          : e.errorReason != null || e.skipped.length > 0
            ? C(e.errorReason)
            : e.retry.length > 0 || e.invalid.length > 0
              ? s._(/*BTDS*/ "")
              : null;
    }
    function g(e, t) {
      var n = new Set(e.map(h));
      return [].concat(
        e,
        t.filter(function (e) {
          var t = h(e);
          return n.has(t) ? !1 : (n.add(t), !0);
        }),
      );
    }
    function h(e) {
      return e.trim().toLowerCase();
    }
    function y(e, t) {
      var n = [],
        r = [],
        o = [],
        a = [];
      return t.length !== e.length
        ? _(e)
        : (e.forEach(function (e, i) {
            var l = t[i];
            if ((l == null ? void 0 : l.email) == null || h(l.email) !== h(e)) {
              a.push(e);
              return;
            }
            var s =
              l.status === "SENT"
                ? null
                : l.status === "INVALID_ADDRESS"
                  ? n
                  : l.status === "SEND_FAILED" || l.status === "RATE_LIMITED"
                    ? r
                    : o;
            s == null || s.push(e);
          }),
          {
            invalid: n,
            retry: r,
            skipped: o,
            unconfirmed: a,
            errorReason: null,
          });
    }
    function C(e) {
      return b(e) ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function b(e) {
      return (
        e === "FEATURE_NOT_ENABLED" ||
        e === "NOT_AUTHORIZED" ||
        e === "NOT_FOUND_OR_UNAVAILABLE"
      );
    }
    function v(e) {
      return e.inviteLink !== ""
        ? null
        : e.isRestricted
          ? S(401)
          : e.failure == null
            ? null
            : S(e.failure.statusCode);
    }
    function S(e) {
      return e === 401
        ? s._(/*BTDS*/ "")
        : e === 403
          ? s._(/*BTDS*/ "")
          : e === 404
            ? s._(/*BTDS*/ "")
            : e === 416
              ? s._(/*BTDS*/ "")
              : e === 436
                ? s._(/*BTDS*/ "")
                : s._(/*BTDS*/ "");
    }
    ((l.stageTypedEmails = e),
      (l.readPastedEmailList = u),
      (l.stagePastedEmails = d),
      (l.getSendOutcome = p),
      (l.getUncertainSendOutcome = _),
      (l.getOutcomeMessage = f),
      (l.mergeEmails = g),
      (l.normalizeEmail = h),
      (l.getInviteLinkStatusMessage = v));
  },
  226,
);
