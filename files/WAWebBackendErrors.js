__d(
  "WAWebBackendErrors",
  ["WACustomError", "WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, n != null ? n : "") || this),
            (r.message = n != null ? n : ""),
            (r.name = "ServerStatusCodeError"),
            (r.status = t),
            (r.statusCode = t),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })((s = o("WACustomError")).CustomError),
      c = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, t, n) || this),
            (o.backoffMs = r.backoffMs),
            (o.name = "MexServerStatusCodeError"),
            (o.retryable = r.retryable),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(u),
      d = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, r != null ? r : "") || this),
            (o.name = "CatalogEditServerError"),
            (o.errors = n),
            (o.status = t),
            (o.statusCode = t),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      m = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, "CatalogUnknownError") || this),
            (n.name = "CatalogUnknownError"),
            (n.reason = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      p = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this, "CollectionReorderError") || this),
            (t.name = "CollectionReorderError"),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      _ = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this, 451, "commerce features disabled") || this),
            (t.name = "E451"),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(u),
      f = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this, 404, t) || this), (n.name = "E404"), n);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(u),
      g = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, 507, t) || this),
            (r.name = "E507"),
            (r.backoff = Number.isNaN(n) ? null : n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(u),
      h = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "Drop"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      y = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "LogoutDrop"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(h),
      C = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "EphemeralDrop"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(h);
    function b(t, n) {
      return t.catch(function (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(["", ", error"])),
              n,
            )
            .verbose()
            .sendLogs(n),
          t
        );
      });
    }
    var v = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, r != null ? r : "") || this),
            (o.name = "UnexpectedJoinGroupViaInviteResponse"),
            (o.gid = t),
            (o.membershipApprovalMode = n),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      S = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, n != null ? n : "") || this),
            (r.name = "UnexpectedJoinSubgroupResponse"),
            (r.membershipApprovalMode = t),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      R = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, r != null ? r : "") || this),
            (o.name = "GroupAddParticipantCountRateLimitServerError"),
            (o.status = t),
            (o.participantLimit = n),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      L = (function (e) {
        function t(t, n, r, o) {
          var a;
          return (
            (a = e.call(this, o != null ? o : "") || this),
            (a.name = "GroupAddParticipantTimeRateLimitServerError"),
            (a.status = t),
            (a.backoff = n),
            (a.limitType = r),
            a
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      E = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, "Ad Account Recovery Required") || this),
            (n.name = "AdAccountRecoveryRequiredError"),
            (n.emailMask = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      k = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "AdAccountRecoveryRequiredEmailMaskEmptyError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      I = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "CatalogIncorrectNonceError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError);
    ((l.ServerStatusCodeError = u),
      (l.MexServerStatusCodeError = c),
      (l.CatalogEditServerError = d),
      (l.CatalogUnknownError = m),
      (l.CollectionReorderError = p),
      (l.E451 = _),
      (l.E404 = f),
      (l.E507 = g),
      (l.LogoutDrop = y),
      (l.EphemeralDrop = C),
      (l.attachErrorLogger = b),
      (l.UnexpectedJoinGroupViaInviteResponse = v),
      (l.UnexpectedJoinSubgroupResponse = S),
      (l.GroupAddParticipantCountRateLimitServerError = R),
      (l.GroupAddParticipantTimeRateLimitServerError = L),
      (l.AdAccountRecoveryRequiredError = E),
      (l.AdAccountRecoveryRequiredEmailMaskEmptyError = k),
      (l.CatalogIncorrectNonceError = I));
  },
  98,
);
