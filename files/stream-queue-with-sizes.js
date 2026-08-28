__d(
  "stream-queue-with-sizes",
  ["stream-helpers"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("stream-helpers").assert,
      l = n("stream-helpers").IsFiniteNonNegativeNumber;
    ((i.DequeueValue = function (t) {
      (e(
        "_queue" in t && "_queueTotalSize" in t,
        "Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]].",
      ),
        e(
          t._queue.length > 0,
          "Spec-level failure: should never dequeue from an empty queue.",
        ));
      var n = t._queue.shift();
      return (
        (t._queueTotalSize -= n.size),
        t._queueTotalSize < 0 && (t._queueTotalSize = 0),
        n.value
      );
    }),
      (i.EnqueueValueWithSize = function (t, n, r) {
        if (
          (e(
            "_queue" in t && "_queueTotalSize" in t,
            "Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and [[queueTotalSize]].",
          ),
          (r = Number(r)),
          !l(r))
        )
          throw new RangeError(
            "Size must be a finite, non-NaN, non-negative number.",
          );
        (t._queue.push({ value: n, size: r }), (t._queueTotalSize += r));
      }),
      (i.PeekQueueValue = function (t) {
        (e(
          "_queue" in t && "_queueTotalSize" in t,
          "Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]].",
        ),
          e(
            t._queue.length > 0,
            "Spec-level failure: should never peek at an empty queue.",
          ));
        var n = t._queue[0];
        return n.value;
      }),
      (i.ResetQueue = function (t) {
        (e(
          "_queue" in t && "_queueTotalSize" in t,
          "Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]].",
        ),
          (t._queue = []),
          (t._queueTotalSize = 0));
      }));
  },
  null,
);
