__d(
  "WAWebWindowsHybridBridge.v2624",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2624",
    "WAWebWindowsHybridBridgeAbProps.v2624",
    "WAWebWindowsHybridBridgeAdv.v2624",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2624",
    "WAWebWindowsHybridBridgeConnection.v2624",
    "WAWebWindowsHybridBridgeContacts.v2624",
    "WAWebWindowsHybridBridgeDebugFeatures.v2624",
    "WAWebWindowsHybridBridgeLinksPreview.v2624",
    "WAWebWindowsHybridBridgeMediaFiles.v2624",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2624",
    "WAWebWindowsHybridBridgeNativeAppState.v2624",
    "WAWebWindowsHybridBridgePictures.v2624",
    "WAWebWindowsHybridBridgePreferences.v2624",
    "WAWebWindowsHybridBridgeRateTheApp.v2624",
    "WAWebWindowsHybridBridgeRingtone.v2624",
    "WAWebWindowsHybridBridgeScalingControl.v2624",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2624",
    "WAWebWindowsHybridBridgeSharesheet.v2624",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2624",
    "WAWebWindowsHybridBridgeTouchpadFix.v2624",
    "WAWebWindowsHybridBridgeVoip.v2624",
    "WAWebWindowsHybridBridgeWam.v2624",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2624",
          ).WindowsHybridBridgeAbProps_v2624)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2624",
          ).WindowsHybridBridgeWam_v2624)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2624",
          ).WindowsHybridBridgePreferences_v2624)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2624",
          ).WindowsHybridBridgeScalingControl_v2624)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2624",
          ).WindowsHybridBridgePictures_v2624)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2624",
            ).WindowsHybridBridgeDebugFeatures_v2624)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2624",
          ).VoipWinRTBridge_v2624)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2624",
          ).WAWebWindowsHybridBridgeRateTheApp_v2624)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2624",
          ).WindowsHybridBridgeConnection_v2624)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2624",
          ).WindowsHybridBridgeTouchpadFix_v2624)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2624",
          ).WindowsHybridBridgeLinksPreview_v2624)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2624",
            ).WindowsHybridBridgeContacts_v2624)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2624",
            ).WindowsHybridBridgeContacts_v2624)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2624",
          ).WAWebWindowsHybridBridgeMediaFiles_v2624)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2624",
          ).WAWebWindowsHybridBridgeSharesheet_v2624)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2624",
          ).WindowsHybridAppActivationBridge_v2624)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2624",
          ).WindowsHybridBridgeNativeAppState_v2624)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2624",
          ).WindowsHybridBridgeSystemIntegrations_v2624)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2624",
          ).WindowsHybridBridgeBrowserExtensions_v2624)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2624",
          ).WindowsHybridBridgeSeamlessMigration_v2624)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2624",
          ).WindowsHybridBridgeMediaTranscoder_v2624)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2624",
          ).WindowsHybridBridgeAdv_v2624)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2624",
          ).WindowsHybridBridgeRingtone_v2624)(E)),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2624 = e;
  },
  98,
);
