__d(
  "WritableStreamPolyfill",
  [
    "MaybeNativePromise",
    "stream-helpers",
    "stream-queue-with-sizes",
    "stream-utils",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = (e = n("stream-helpers")).InvokeOrNoop,
      u = e.PromiseInvokeOrNoop,
      c = e.ValidateAndNormalizeQueuingStrategy,
      d = e.typeIsObject,
      m = e.assert,
      p = n("stream-utils").rethrowAssertionErrorRejection,
      _ = (l = n("stream-queue-with-sizes")).DequeueValue,
      f = l.EnqueueValueWithSize,
      g = l.PeekQueueValue,
      h = l.ResetQueue,
      y = "[[StartSteps]]",
      C = "[[AbortSteps]]",
      b = "[[ErrorSteps]]",
      v = (function () {
        function e(e, t) {
          e === void 0 && (e = {});
          var n = t === void 0 ? {} : t,
            r = n.size,
            o = n.highWaterMark,
            a = o === void 0 ? 1 : o;
          ((this._state = "writable"),
            (this._storedError = void 0),
            (this._writer = void 0),
            (this._writableStreamController = void 0),
            (this._writeRequests = []),
            (this._inFlightWriteRequest = void 0),
            (this._closeRequest = void 0),
            (this._inFlightCloseRequest = void 0),
            (this._pendingAbortRequest = void 0),
            (this._backpressure = !1));
          var i = e.type;
          if (i !== void 0) throw new RangeError("Invalid type is specified");
          ((this._writableStreamController = new X(this, e, r, a)),
            this._writableStreamController[y](),
            Object.defineProperty &&
              Object.defineProperty(this, "locked", {
                get: this._isLocked.bind(this),
              }));
        }
        var t = e.prototype;
        return (
          (t._isLocked = function () {
            if (R(this) === !1) throw se("locked");
            return L(this);
          }),
          (t.abort = function (t) {
            return R(this) === !1
              ? n("MaybeNativePromise").reject(se("abort"))
              : L(this) === !0
                ? n("MaybeNativePromise").reject(
                    new TypeError(
                      "Cannot abort a stream that already has a writer",
                    ),
                  )
                : E(this, t);
          }),
          (t.getWriter = function () {
            if (R(this) === !1) throw se("getWriter");
            return S(this);
          }),
          e
        );
      })();
    a.exports = {
      AcquireWritableStreamDefaultWriter: S,
      IsWritableStream: R,
      IsWritableStreamLocked: L,
      WritableStream: v,
      WritableStreamAbort: E,
      WritableStreamDefaultControllerError: le,
      WritableStreamDefaultWriterCloseWithErrorPropagation: H,
      WritableStreamDefaultWriterRelease: K,
      WritableStreamDefaultWriterWrite: Q,
      WritableStreamCloseQueuedOrInFlight: M,
    };
    function S(e) {
      return new W(e);
    }
    function R(e) {
      return !(
        !d(e) ||
        !Object.prototype.hasOwnProperty.call(e, "_writableStreamController")
      );
    }
    function L(e) {
      return (
        m(
          R(e) === !0,
          "IsWritableStreamLocked should only be used on known writable streams",
        ),
        e._writer !== void 0
      );
    }
    function E(e, t) {
      var r = e._state;
      if (r === "closed") return n("MaybeNativePromise").resolve(void 0);
      if (r === "errored")
        return n("MaybeNativePromise").reject(e._storedError);
      var o = new TypeError("Requested to abort");
      if (e._pendingAbortRequest !== void 0)
        return n("MaybeNativePromise").reject(o);
      m(
        r === "writable" || r === "erroring",
        "state must be writable or erroring",
      );
      var a = !1;
      r === "erroring" && ((a = !0), (t = void 0));
      var i = new (n("MaybeNativePromise"))(function (n, r) {
        e._pendingAbortRequest = {
          _resolve: n,
          _reject: r,
          _reason: t,
          _wasAlreadyErroring: a,
        };
      });
      return (a === !1 && T(e, o), i);
    }
    function k(e) {
      (m(L(e) === !0), m(e._state === "writable"));
      var t = new (n("MaybeNativePromise"))(function (t, n) {
        var r = { _resolve: t, _reject: n };
        e._writeRequests.push(r);
      });
      return t;
    }
    function I(e, t) {
      var n = e._state;
      if (n === "writable") {
        T(e, t);
        return;
      }
      (m(n === "erroring"), D(e));
    }
    function T(e, t) {
      (m(e._storedError === void 0, "stream._storedError === undefined"),
        m(e._state === "writable", "state must be writable"));
      var n = e._writableStreamController;
      (m(n !== void 0, "controller must not be undefined"),
        (e._state = "erroring"),
        (e._storedError = t));
      var r = e._writer;
      (r !== void 0 && z(r, t), w(e) === !1 && n._started === !0 && D(e));
    }
    function D(e) {
      (m(e._state === "erroring", "stream._state === erroring"),
        m(
          w(e) === !1,
          "WritableStreamHasOperationMarkedInFlight(stream) === false",
        ),
        (e._state = "errored"),
        e._writableStreamController[b]());
      var t = e._storedError;
      for (var n of e._writeRequests) n._reject(t);
      if (((e._writeRequests = []), e._pendingAbortRequest === void 0)) {
        O(e);
        return;
      }
      var r = e._pendingAbortRequest;
      if (((e._pendingAbortRequest = void 0), r._wasAlreadyErroring === !0)) {
        (r._reject(t), O(e));
        return;
      }
      var o = e._writableStreamController[C](r._reason);
      o.then(
        function () {
          (r._resolve(), O(e));
        },
        function (t) {
          (r._reject(t), O(e));
        },
      );
    }
    function x(e) {
      (m(e._inFlightWriteRequest !== void 0),
        e._inFlightWriteRequest._resolve(void 0),
        (e._inFlightWriteRequest = void 0));
    }
    function $(e, t) {
      (m(e._inFlightWriteRequest !== void 0),
        e._inFlightWriteRequest._reject(t),
        (e._inFlightWriteRequest = void 0),
        m(e._state === "writable" || e._state === "erroring"),
        I(e, t));
    }
    function P(e) {
      (m(e._inFlightCloseRequest !== void 0),
        e._inFlightCloseRequest._resolve(void 0),
        (e._inFlightCloseRequest = void 0));
      var t = e._state;
      (m(t === "writable" || t === "erroring"),
        t === "erroring" &&
          ((e._storedError = void 0),
          e._pendingAbortRequest !== void 0 &&
            (e._pendingAbortRequest._resolve(),
            (e._pendingAbortRequest = void 0))),
        (e._state = "closed"));
      var n = e._writer;
      (n !== void 0 && ge(n),
        m(
          e._pendingAbortRequest === void 0,
          "stream._pendingAbortRequest === undefined",
        ),
        m(e._storedError === void 0, "stream._storedError === undefined"));
    }
    function N(e, t) {
      (m(e._inFlightCloseRequest !== void 0),
        e._inFlightCloseRequest._reject(t),
        (e._inFlightCloseRequest = void 0),
        m(e._state === "writable" || e._state === "erroring"),
        e._pendingAbortRequest !== void 0 &&
          (e._pendingAbortRequest._reject(t),
          (e._pendingAbortRequest = void 0)),
        I(e, t));
    }
    function M(e) {
      return !(
        e._closeRequest === void 0 && e._inFlightCloseRequest === void 0
      );
    }
    function w(e) {
      return !(
        e._inFlightWriteRequest === void 0 && e._inFlightCloseRequest === void 0
      );
    }
    function A(e) {
      (m(e._inFlightCloseRequest === void 0),
        m(e._closeRequest !== void 0),
        (e._inFlightCloseRequest = e._closeRequest),
        (e._closeRequest = void 0));
    }
    function F(e) {
      (m(
        e._inFlightWriteRequest === void 0,
        "there must be no pending write request",
      ),
        m(e._writeRequests.length !== 0, "writeRequests must not be empty"),
        (e._inFlightWriteRequest = e._writeRequests.shift()));
    }
    function O(e) {
      (m(e._state === "errored", '_stream_.[[state]] is `"errored"`'),
        e._closeRequest !== void 0 &&
          (m(e._inFlightCloseRequest === void 0),
          e._closeRequest._reject(e._storedError),
          (e._closeRequest = void 0)));
      var t = e._writer;
      t !== void 0 &&
        (_e(t, e._storedError), t._closedPromise.catch(function () {}));
    }
    function B(e, t) {
      (m(e._state === "writable"), m(M(e) === !1));
      var n = e._writer;
      (n !== void 0 &&
        t !== e._backpressure &&
        (t === !0 ? ve(n) : (m(t === !1), Re(n))),
        (e._backpressure = t));
    }
    var W = (function () {
      function e(e) {
        if (R(e) === !1)
          throw new TypeError(
            "WritableStreamDefaultWriter can only be constructed with a WritableStream instance",
          );
        if (L(e) === !0)
          throw new TypeError(
            "This stream has already been locked for exclusive writing by another writer",
          );
        ((this._ownerWritableStream = e), (e._writer = this));
        var t = e._state;
        if (t === "writable")
          (M(e) === !1 && e._backpressure === !0 ? he(this) : Ce(this),
            de(this));
        else if (t === "erroring")
          (ye(this, e._storedError),
            this._readyPromise.catch(function () {}),
            de(this));
        else if (t === "closed") (Ce(this), pe(this));
        else {
          m(t === "errored", "state must be errored");
          var n = e._storedError;
          (ye(this, n),
            this._readyPromise.catch(function () {}),
            me(this, n),
            this._closedPromise.catch(function () {}));
        }
        Object.defineProperty &&
          (Object.defineProperty(this, "closed", {
            get: this._isClosed.bind(this),
          }),
          Object.defineProperty(this, "desiredSize", {
            get: this._getDesiredSize.bind(this),
          }),
          Object.defineProperty(this, "ready", {
            get: this._isReady.bind(this),
          }));
      }
      var t = e.prototype;
      return (
        (t._isClosed = function () {
          return q(this) === !1
            ? n("MaybeNativePromise").reject(ue("closed"))
            : this._closedPromise;
        }),
        (t._getDesiredSize = function () {
          if (q(this) === !1) throw ue("desiredSize");
          if (this._ownerWritableStream === void 0) throw ce("desiredSize");
          return j(this);
        }),
        (t._isReady = function () {
          return q(this) === !1
            ? n("MaybeNativePromise").reject(ue("ready"))
            : this._readyPromise;
        }),
        (t.abort = function (t) {
          return q(this) === !1
            ? n("MaybeNativePromise").reject(ue("abort"))
            : this._ownerWritableStream === void 0
              ? n("MaybeNativePromise").reject(ce("abort"))
              : U(this, t);
        }),
        (t.close = function () {
          if (q(this) === !1)
            return n("MaybeNativePromise").reject(ue("close"));
          var e = this._ownerWritableStream;
          return e === void 0
            ? n("MaybeNativePromise").reject(ce("close"))
            : M(e) === !0
              ? n("MaybeNativePromise").reject(
                  new TypeError("cannot close an already-closing stream"),
                )
              : V(this);
        }),
        (t.releaseLock = function () {
          if (q(this) === !1) throw ue("releaseLock");
          var e = this._ownerWritableStream;
          e !== void 0 && (m(e._writer !== void 0), K(this));
        }),
        (t.write = function (t) {
          return q(this) === !1
            ? n("MaybeNativePromise").reject(ue("write"))
            : this._ownerWritableStream === void 0
              ? n("MaybeNativePromise").reject(ce("write to"))
              : Q(this, t);
        }),
        e
      );
    })();
    function q(e) {
      return !(
        !d(e) ||
        !Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream")
      );
    }
    function U(e, t) {
      var n = e._ownerWritableStream;
      return (m(n !== void 0), E(n, t));
    }
    function V(e) {
      var t = e._ownerWritableStream;
      m(t !== void 0);
      var r = t._state;
      if (r === "closed" || r === "errored")
        return n("MaybeNativePromise").reject(
          new TypeError(
            "The stream (in " +
              r +
              " state) is not in the writable state and cannot be closed",
          ),
        );
      (m(r === "writable" || r === "erroring"), m(M(t) === !1));
      var o = new (n("MaybeNativePromise"))(function (e, n) {
        var r = { _resolve: e, _reject: n };
        t._closeRequest = r;
      });
      return (
        t._backpressure === !0 && r === "writable" && Re(e),
        Y(t._writableStreamController),
        o
      );
    }
    function H(e) {
      var t = e._ownerWritableStream;
      m(t !== void 0);
      var r = t._state;
      return M(t) === !0 || r === "closed"
        ? n("MaybeNativePromise").resolve()
        : r === "errored"
          ? n("MaybeNativePromise").reject(t._storedError)
          : (m(r === "writable" || r === "erroring"), V(e));
    }
    function G(e, t) {
      (e._closedPromiseState === "pending" ? _e(e, t) : fe(e, t),
        e._closedPromise.catch(function () {}));
    }
    function z(e, t) {
      (e._readyPromiseState === "pending" ? be(e, t) : Se(e, t),
        e._readyPromise.catch(function () {}));
    }
    function j(e) {
      var t = e._ownerWritableStream,
        n = t._state;
      return n === "errored" || n === "erroring"
        ? null
        : n === "closed"
          ? 0
          : Z(t._writableStreamController);
    }
    function K(e) {
      var t = e._ownerWritableStream;
      (m(t !== void 0), m(t._writer === e));
      var n = new TypeError(
        "Writer was released and can no longer be used to monitor the stream's closedness",
      );
      (z(e, n),
        G(e, n),
        (t._writer = void 0),
        (e._ownerWritableStream = void 0));
    }
    function Q(e, t) {
      var r = e._ownerWritableStream;
      m(r !== void 0);
      var o = r._writableStreamController,
        a = J(o, t);
      if (r !== e._ownerWritableStream)
        return n("MaybeNativePromise").reject(ce("write to"));
      var i = r._state;
      if (i === "errored")
        return n("MaybeNativePromise").reject(r._storedError);
      if (M(r) === !0 || i === "closed")
        return n("MaybeNativePromise").reject(
          new TypeError(
            "The stream is closing or closed and cannot be written to",
          ),
        );
      if (i === "erroring")
        return n("MaybeNativePromise").reject(r._storedError);
      m(i === "writable");
      var l = k(r);
      return (ee(o, t, a), l);
    }
    var X = (function () {
      function e(e, t, n, r) {
        if (R(e) === !1)
          throw new TypeError(
            "WritableStreamDefaultController can only be constructed with a WritableStream instance",
          );
        if (e._writableStreamController !== void 0)
          throw new TypeError(
            "WritableStreamDefaultController instances can only be created by the WritableStream constructor",
          );
        ((this._controlledWritableStream = e),
          (this._underlyingSink = t),
          (this._queue = void 0),
          (this._queueTotalSize = void 0),
          h(this),
          (this._started = !1));
        var o = c(n, r);
        ((this._strategySize = o.size), (this._strategyHWM = o.highWaterMark));
        var a = ie(this);
        B(e, a);
      }
      var t = e.prototype;
      return (
        (t.error = function (t) {
          if (te(this) === !1)
            throw new TypeError(
              "WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController",
            );
          var e = this._controlledWritableStream._state;
          e === "writable" && le(this, t);
        }),
        (t[C] = function (e) {
          return u(this._underlyingSink, "abort", [e]);
        }),
        (t[b] = function () {
          h(this);
        }),
        (t[y] = function () {
          var e = this,
            t = s(this._underlyingSink, "start", [this]),
            r = this._controlledWritableStream;
          n("MaybeNativePromise")
            .resolve(t)
            .then(
              function () {
                (m(r._state === "writable" || r._state === "erroring"),
                  (e._started = !0),
                  ne(e));
              },
              function (t) {
                (m(r._state === "writable" || r._state === "erroring"),
                  (e._started = !0),
                  I(r, t));
              },
            )
            .catch(p);
        }),
        e
      );
    })();
    function Y(e) {
      (f(e, "close", 0), ne(e));
    }
    function J(e, t) {
      var n = e._strategySize;
      if (n === void 0) return 1;
      try {
        return n(t);
      } catch (t) {
        return (re(e, t), 1);
      }
    }
    function Z(e) {
      return e._strategyHWM - e._queueTotalSize;
    }
    function ee(e, t, n) {
      var r = { chunk: t };
      try {
        f(e, r, n);
      } catch (t) {
        re(e, t);
        return;
      }
      var o = e._controlledWritableStream;
      if (M(o) === !1 && o._state === "writable") {
        var a = ie(e);
        B(o, a);
      }
      ne(e);
    }
    function te(e) {
      return !(
        !d(e) || !Object.prototype.hasOwnProperty.call(e, "_underlyingSink")
      );
    }
    function ne(e) {
      var t = e._controlledWritableStream;
      if (e._started !== !1 && t._inFlightWriteRequest === void 0) {
        var n = t._state;
        if (!(n === "closed" || n === "errored")) {
          if (n === "erroring") {
            D(t);
            return;
          }
          if (e._queue.length !== 0) {
            var r = g(e);
            r === "close" ? oe(e) : ae(e, r.chunk);
          }
        }
      }
    }
    function re(e, t) {
      e._controlledWritableStream._state === "writable" && le(e, t);
    }
    function oe(e) {
      var t = e._controlledWritableStream;
      (A(t),
        _(e),
        m(
          e._queue.length === 0,
          "queue must be empty once the final write record is dequeued",
        ));
      var n = u(e._underlyingSink, "close", []);
      n.then(
        function () {
          P(t);
        },
        function (e) {
          N(t, e);
        },
      ).catch(p);
    }
    function ae(e, t) {
      var n = e._controlledWritableStream;
      F(n);
      var r = u(e._underlyingSink, "write", [t, e]);
      r.then(
        function () {
          x(n);
          var t = n._state;
          if (
            (m(t === "writable" || t === "erroring"),
            _(e),
            M(n) === !1 && t === "writable")
          ) {
            var r = ie(e);
            B(n, r);
          }
          ne(e);
        },
        function (e) {
          $(n, e);
        },
      ).catch(p);
    }
    function ie(e) {
      var t = Z(e);
      return t <= 0;
    }
    function le(e, t) {
      var n = e._controlledWritableStream;
      (m(n._state === "writable"), T(n, t));
    }
    function se(e) {
      return new TypeError(
        "WritableStream.prototype." +
          e +
          " can only be used on a WritableStream",
      );
    }
    function ue(e) {
      return new TypeError(
        "WritableStreamDefaultWriter.prototype." +
          e +
          " can only be used on a WritableStreamDefaultWriter",
      );
    }
    function ce(e) {
      return new TypeError("Cannot " + e + " a stream using a released writer");
    }
    function de(e) {
      e._closedPromise = new (n("MaybeNativePromise"))(function (t, n) {
        ((e._closedPromise_resolve = t),
          (e._closedPromise_reject = n),
          (e._closedPromiseState = "pending"));
      });
    }
    function me(e, t) {
      ((e._closedPromise = n("MaybeNativePromise").reject(t)),
        (e._closedPromise_resolve = void 0),
        (e._closedPromise_reject = void 0),
        (e._closedPromiseState = "rejected"));
    }
    function pe(e) {
      ((e._closedPromise = n("MaybeNativePromise").resolve(void 0)),
        (e._closedPromise_resolve = void 0),
        (e._closedPromise_reject = void 0),
        (e._closedPromiseState = "resolved"));
    }
    function _e(e, t) {
      (m(
        e._closedPromise_resolve !== void 0,
        "writer._closedPromise_resolve !== undefined",
      ),
        m(
          e._closedPromise_reject !== void 0,
          "writer._closedPromise_reject !== undefined",
        ),
        m(
          e._closedPromiseState === "pending",
          "writer._closedPromiseState is pending",
        ),
        e._closedPromise_reject(t),
        (e._closedPromise_resolve = void 0),
        (e._closedPromise_reject = void 0),
        (e._closedPromiseState = "rejected"));
    }
    function fe(e, t) {
      (m(
        e._closedPromise_resolve === void 0,
        "writer._closedPromise_resolve === undefined",
      ),
        m(
          e._closedPromise_reject === void 0,
          "writer._closedPromise_reject === undefined",
        ),
        m(
          e._closedPromiseState !== "pending",
          "writer._closedPromiseState is not pending",
        ),
        (e._closedPromise = n("MaybeNativePromise").reject(t)),
        (e._closedPromiseState = "rejected"));
    }
    function ge(e) {
      (m(
        e._closedPromise_resolve !== void 0,
        "writer._closedPromise_resolve !== undefined",
      ),
        m(
          e._closedPromise_reject !== void 0,
          "writer._closedPromise_reject !== undefined",
        ),
        m(
          e._closedPromiseState === "pending",
          "writer._closedPromiseState is pending",
        ),
        e._closedPromise_resolve(void 0),
        (e._closedPromise_resolve = void 0),
        (e._closedPromise_reject = void 0),
        (e._closedPromiseState = "resolved"));
    }
    function he(e) {
      ((e._readyPromise = new (n("MaybeNativePromise"))(function (t, n) {
        ((e._readyPromise_resolve = t), (e._readyPromise_reject = n));
      })),
        (e._readyPromiseState = "pending"));
    }
    function ye(e, t) {
      ((e._readyPromise = n("MaybeNativePromise").reject(t)),
        (e._readyPromise_resolve = void 0),
        (e._readyPromise_reject = void 0),
        (e._readyPromiseState = "rejected"));
    }
    function Ce(e) {
      ((e._readyPromise = n("MaybeNativePromise").resolve(void 0)),
        (e._readyPromise_resolve = void 0),
        (e._readyPromise_reject = void 0),
        (e._readyPromiseState = "fulfilled"));
    }
    function be(e, t) {
      (m(
        e._readyPromise_resolve !== void 0,
        "writer._readyPromise_resolve !== undefined",
      ),
        m(
          e._readyPromise_reject !== void 0,
          "writer._readyPromise_reject !== undefined",
        ),
        e._readyPromise_reject(t),
        (e._readyPromise_resolve = void 0),
        (e._readyPromise_reject = void 0),
        (e._readyPromiseState = "rejected"));
    }
    function ve(e) {
      (m(
        e._readyPromise_resolve === void 0,
        "writer._readyPromise_resolve === undefined",
      ),
        m(
          e._readyPromise_reject === void 0,
          "writer._readyPromise_reject === undefined",
        ),
        (e._readyPromise = new (n("MaybeNativePromise"))(function (t, n) {
          ((e._readyPromise_resolve = t), (e._readyPromise_reject = n));
        })),
        (e._readyPromiseState = "pending"));
    }
    function Se(e, t) {
      (m(
        e._readyPromise_resolve === void 0,
        "writer._readyPromise_resolve === undefined",
      ),
        m(
          e._readyPromise_reject === void 0,
          "writer._readyPromise_reject === undefined",
        ),
        (e._readyPromise = n("MaybeNativePromise").reject(t)),
        (e._readyPromiseState = "rejected"));
    }
    function Re(e) {
      (m(
        e._readyPromise_resolve !== void 0,
        "writer._readyPromise_resolve !== undefined",
      ),
        m(
          e._readyPromise_reject !== void 0,
          "writer._readyPromise_reject !== undefined",
        ),
        e._readyPromise_resolve(void 0),
        (e._readyPromise_resolve = void 0),
        (e._readyPromise_reject = void 0),
        (e._readyPromiseState = "fulfilled"));
    }
  },
  null,
);
