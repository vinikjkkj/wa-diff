__d(
  "WAWebWindowsHybridBridge.v2620",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2620",
    "WAWebWindowsHybridBridgeAbProps.v2620",
    "WAWebWindowsHybridBridgeAdv.v2620",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2620",
    "WAWebWindowsHybridBridgeConnection.v2620",
    "WAWebWindowsHybridBridgeContacts.v2620",
    "WAWebWindowsHybridBridgeDebugFeatures.v2620",
    "WAWebWindowsHybridBridgeLinksPreview.v2620",
    "WAWebWindowsHybridBridgeMediaFiles.v2620",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2620",
    "WAWebWindowsHybridBridgeNativeAppState.v2620",
    "WAWebWindowsHybridBridgePictures.v2620",
    "WAWebWindowsHybridBridgePreferences.v2620",
    "WAWebWindowsHybridBridgeRateTheApp.v2620",
    "WAWebWindowsHybridBridgeRingtone.v2620",
    "WAWebWindowsHybridBridgeScalingControl.v2620",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2620",
    "WAWebWindowsHybridBridgeSharesheet.v2620",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2620",
    "WAWebWindowsHybridBridgeTouchpadFix.v2620",
    "WAWebWindowsHybridBridgeVoip.v2620",
    "WAWebWindowsHybridBridgeWam.v2620",
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
            "WAWebWindowsHybridBridgeAbProps.v2620",
          ).WindowsHybridBridgeAbProps_v2620)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2620",
          ).WindowsHybridBridgeWam_v2620)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2620",
          ).WindowsHybridBridgePreferences_v2620)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2620",
          ).WindowsHybridBridgeScalingControl_v2620)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2620",
          ).WindowsHybridBridgePictures_v2620)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2620",
            ).WindowsHybridBridgeDebugFeatures_v2620)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2620",
          ).VoipWinRTBridge_v2620)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2620",
          ).WAWebWindowsHybridBridgeRateTheApp_v2620)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2620",
          ).WindowsHybridBridgeConnection_v2620)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2620",
          ).WindowsHybridBridgeTouchpadFix_v2620)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2620",
          ).WindowsHybridBridgeLinksPreview_v2620)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2620",
            ).WindowsHybridBridgeContacts_v2620)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2620",
            ).WindowsHybridBridgeContacts_v2620)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2620",
          ).WAWebWindowsHybridBridgeMediaFiles_v2620)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2620",
          ).WAWebWindowsHybridBridgeSharesheet_v2620)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2620",
          ).WindowsHybridAppActivationBridge_v2620)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2620",
          ).WindowsHybridBridgeNativeAppState_v2620)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2620",
          ).WindowsHybridBridgeSystemIntegrations_v2620)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2620",
          ).WindowsHybridBridgeBrowserExtensions_v2620)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2620",
          ).WindowsHybridBridgeSeamlessMigration_v2620)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2620",
          ).WindowsHybridBridgeMediaTranscoder_v2620)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2620",
          ).WindowsHybridBridgeAdv_v2620)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2620",
          ).WindowsHybridBridgeRingtone_v2620)(E)),
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
    l.WindowsHybridBridge_v2620 = e;
  },
  98,
);
