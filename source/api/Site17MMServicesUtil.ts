/// <reference path="../../types/sn_typings_server_scoped/dist/index.d.ts" />
/// <reference path="../../types/x_g_inte_site_17/index.d.ts" />
/// <reference path="../../types/x_44813_mmservices/table/index.d.ts" />

namespace x_44813_mmservices {
    export interface ISite17MMServicesUtil extends $$snClass.ICustomClassBase<ISite17MMServicesUtil, "Site17MMServicesUtil"> {
        /**
         * Gets the number of days the default minimum lead time for appointments.
         * @memberof ISite17MMServicesUtilBase
         */
        getDefaultMinLeadTimeDays(): void;

        /**
         * Gets the next available time slot.
         * @memberof ISite17MMServicesUtilBase
         * @description
         * The 'availability' element will contain an attribute named 'success' which will contain the value 'true' if an availability was returned; otherwise, it will contain 'false'.
         * If the 'success' attribute of the 'availability' element is 'true', then the 'startDateTime' will contain the start date and time of the next
         * availability.
         * The 'durationMinutes' attribute indicates the number of contiguous minutes that are open for appointments. This attrbute may be missing
         * if no 'sys_parm_to' parameter was provided all future times are open for appointments.
         * 
         * Parameters are:
         * sys_parm_from: The date and time to start from.
         * sys_parm_to: The optional end date and time to search within.
         * sys_parm_duration: The optional minimum appointments duration in minutes.
         * sys_parm_include: The optional list of comma-separated result inclusions.
         * 
         * Values for result inclusions are:
         * approval_group: If there is an approval group, the sys_id will be contained in the 'approval_group' attribute of the 'scheduler_type' element.
         * assignment_group: The sys_id of the assignment group will be contained in the 'assignment_group' attribute of the 'scheduler_type' element.
         * duration_increment: The number of minutes for duration increments will be contained in the 'duration_increment' attribute of the 'scheduler_type' element.
         * minimum_duration: The minimum number of minutes for durations will be contained in the 'minimum_duration' attribute of the 'scheduler_type' element.
         * maximum_duration: The maximum number of minutes for durations will be contained in the 'maximum_duration' attribute of the 'scheduler_type' element.
         * start_time_interval: The number of minutes for start time intervals will be contained in the 'start_time_interval' attribute of the 'scheduler_type' element.
         * default_min_lead_time: The number of days the default minimum lead time for appointments.
         */
        getNextAvailableTimeSlot(): void;

        /**
         * Gets the appointment availabilities within a given date and time range.
         * @memberof ISite17MMServicesUtilBase
         * @description
         * The 'availabilities' element will contain an attribute named 'length' which will indicate the number of availabilities found.
         * Child elements named 'availability' contain the individual date/time ranges open for reservation.
         * Each child element has a 'startDateTime' attribute that contains the start date and time, and a 'durationMinutes' attribute that
         * indicates the number of contiguous minutes that are open for reservation.
         * 
         * Parameters are:
         * sys_parm_from: The date and time to start from.
         * sys_parm_to: The end date and time to search within.
         * sys_parm_duration: The optional minimum reservation duration in minutes.
         * sys_parm_include: The optional list of comma-separated result inclusions.
         * 
         * Values for result inclusions are:
         * approval_group: If there is an approval group, the sys_id will be contained in the 'approval_group' attribute of the 'scheduler_type' element.
         * assignment_group: The sys_id of the assignment group will be contained in the 'assignment_group' attribute of the 'scheduler_type' element.
         * duration_increment: The number of minutes for duration increments will be contained in the 'duration_increment' attribute of the 'scheduler_type' element.
         * minimum_duration: The minimum number of minutes for durations will be contained in the 'minimum_duration' attribute of the 'scheduler_type' element.
         * maximum_duration: The maximum number of minutes for durations will be contained in the 'maximum_duration' attribute of the 'scheduler_type' element.
         * start_time_interval: The number of minutes for start time intervals will be contained in the 'start_time_interval' attribute of the 'scheduler_type' element.
         * default_min_lead_time: The number of days the default minimum lead time for appointments.
         */
        getAvailabilitiesInRange(): void;
    }
    
    export interface ISite17MMServicesUtilPrototype extends $$snClass.ICustomAjaxClassPrototype<ISite17MMServicesUtil, ISite17MMServicesUtilPrototype, "Site17MMServicesUtil">, ISite17MMServicesUtil {
    }
    
    export type Site17MMServicesUtil = Readonly<ISite17MMServicesUtil>;
    
    export interface ISite17MMServicesUtilConstructorPrivate {
        _scheduler?: x_g_inte_site_17.ReservationScheduler;
    }

    export interface Site17MMServicesUtilConstructor extends $$snClass.CustomAjaxClassConstructor<ISite17MMServicesUtil, ISite17MMServicesUtilPrototype, Site17MMServicesUtil> {
        /**
         * Gets the number of days the default minimum lead time for appointments.
         * @return {number} The number of days the default minimum lead time for appointments.
         * @memberof Site17MMServicesUtilConstructor
         * @description This value is stored in the 'x_44813_mmservices.default_min_leadTime_days' system property, with a default value of 3.
         */
        getDefaultMinLeadTimeDays(): number;

        /**
         * Gets the SysId of the associated 'Reservation Type' record.
         * @return {(string | undefined)} The SysId of the associated record in the 'Reservation Type' table (x_g_inte_site_17_reservation_type).
         * @memberof Site17MMServicesUtilConstructor
         * @description This value is stored within the 'x_44813_mmservices.reservation_type' system property.
         */
        getReservationTypeSysId(): string | undefined;

        /**
         * Gets the ReservationScheduler instance associated with this app.
         * @return {x_g_inte_site_17.ReservationScheduler} The ReservationScheduler instance associated with this app.
         * @memberof Site17MMServicesUtilConstructor
         */
        getReservationScheduler(): x_g_inte_site_17.ReservationScheduler;
    }

    // /show_schedule_page.do?sysparm_page_sys_id=gantt_chart&sysparm_timeline_task_id=d530bf907f0000015ce594fd929cf6a4
    export const Site17MMServicesUtil: Site17MMServicesUtilConstructor = (function (): Site17MMServicesUtilConstructor {
        const schedule_sys_id = '4882479b2f50511035be56e62799b64c';
    
        const PROPERTY_NAME_default_min_leadTime_days = 'x_44813_mmservices.default_min_leadTime_days';
        const PROPERTY_NAME_reservation_type = 'x_44813_mmservices.reservation_type';
        const XML_NAME_default_min_lead_time = "default_min_lead_time";
        const DATE_PATTERN = /^\d{4}-(0[1-9]|1[0-2])-[0-2]\d|3[01]$/;
        const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;
        const TIME_RANGE_PATTERN = /^((?:[01]\d|2[0-3]):[0-5]\d)-((?:[01]\d|2[0-3]):[0-5]\d)$/;
        
        var constructor: Site17MMServicesUtilConstructor = Class.create();
    
        var privateData: ISite17MMServicesUtilConstructorPrivate = { };
    
        function isNil(obj: any | undefined): obj is undefined | null | "" {
            switch (typeof obj) {
                case 'undefined':
                    return true;
                case 'number':
                    return isNaN(obj) || !isFinite(obj);
                case 'string':
                    return obj.trim().length == 0;
                case 'object':
                    if (obj === null) return true;
                    if (global.JSUtil.instance_of(obj, 'java.lang.String'))
                        return obj.length == 0 || ('' + obj).trim().length == 0;
                    if (obj instanceof GlideElement)
                        return obj.nil();
                    return false;
                default:
                    return false;
            }
        }
    
        function getDefaultMinLeadTimeDays(): number {
            var defaultMinLeadTime: number = parseInt('' + gs.getProperty(PROPERTY_NAME_default_min_leadTime_days, ''));
            return isNaN(defaultMinLeadTime) ? 3 : defaultMinLeadTime;
        }

        function getReservationTypeSysId(): string | undefined {
            var sysId: string = gs.getProperty(PROPERTY_NAME_reservation_type);
            if (isNil(sysId)) return;
            return isNil(sysId) ? undefined : sysId;
        }

        function getReservationScheduler(): x_g_inte_site_17.ReservationScheduler {
            var sys_id = getReservationTypeSysId();
            if (isNil(sys_id)) {
                privateData._scheduler = undefined;
                throw new Error('Failure invoking x_44813_mmservices.getReservationScheduler: Property "' + PROPERTY_NAME_reservation_type + '" is empty.');
            }
            if (typeof privateData._scheduler !== 'undefined') {
                if (privateData._scheduler.sys_id == sys_id)
                    return privateData._scheduler;
                privateData._scheduler = undefined;
            }
            var gr = <reservation_typeGlideRecord>new GlideRecord(x_g_inte_site_17.ReservationScheduler.getTableName());
            gr.addQuery('sys_id', sys_id);
            gr.query();
            if (!gr.next())
                throw new Error('Failure invoking x_44813_mmservices.getReservationScheduler: Reservation Type (' + x_g_inte_site_17.ReservationScheduler.getTableName() +
                    ') with sys_id "' + sys_id + '" (specified in setting ' + PROPERTY_NAME_reservation_type + ') was not found.');
            privateData._scheduler = new x_g_inte_site_17.ReservationScheduler(gr);
            return privateData._scheduler;
        }

        /**
         * Gets the number of days the default minimum lead time for appointments.
         * @return {number} The number of days the default minimum lead time for appointments.
         * @description This value is stored in the 'x_44813_mmservices.default_min_leadTime_days' system property, with a default value of 3.
         * @static
         * @memberof Site17MMServicesUtil
         */
        constructor.getDefaultMinLeadTimeDays = getDefaultMinLeadTimeDays;
    
        /**
         * Gets the SysId of the associated 'Reservation Type' record.
         * @return {(string | undefined)} The SysId of the associated record in the 'Reservation Type' table (x_g_inte_site_17_reservation_type).
         * @description This value is stored within the 'x_44813_mmservices.reservation_type' system property.
         * @static
         * @memberof Site17MMServicesUtil
         */
        constructor.getReservationTypeSysId = getReservationTypeSysId;
    
        /**
         * Gets the ReservationScheduler instance associated with this app.
         * @return {x_g_inte_site_17.ReservationScheduler} The ReservationScheduler instance associated with this app.
         * @static
         * @memberof Site17MMServicesUtil
         */
        constructor.getReservationScheduler = getReservationScheduler;
    
        constructor.prototype = Object.extendsObject<IAbstractAjaxProcessor, ISite17MMServicesUtilPrototype>(global.AbstractAjaxProcessor, {
            /**
             * Gets the number of days the default minimum lead time for appointments.
             * @memberof Site17MMServicesUtil
             */
            getDefaultMinLeadTimeDays: function(this: IAbstractAjaxProcessor & ISite17MMServicesUtilPrototype): void {
                this.setAnswer(getDefaultMinLeadTimeDays())
            },
    
            /**
             * Gets the appointment availabilities within a given date and time range.
             * @description
             * The 'availabilities' element will contain an attribute named 'length' which will indicate the number of availabilities found.
             * Child elements named 'availability' contain the individual date/time ranges open for reservation.
             * Each child element has a 'startDateTime' attribute that contains the start date and time, and a 'durationMinutes' attribute that
             * indicates the number of contiguous minutes that are open for reservation.
             * 
             * Parameters are:
             * sys_parm_from: The date and time to start from.
             * sys_parm_to: The end date and time to search within.
             * sys_parm_duration: The optional minimum reservation duration in minutes.
             * sys_parm_include: The optional list of comma-separated result inclusions.
             * 
             * Values for result inclusions are:
             * approval_group: If there is an approval group, the sys_id will be contained in the 'approval_group' attribute of the 'scheduler_type' element.
             * assignment_group: The sys_id of the assignment group will be contained in the 'assignment_group' attribute of the 'scheduler_type' element.
             * duration_increment: The number of minutes for duration increments will be contained in the 'duration_increment' attribute of the 'scheduler_type' element.
             * minimum_duration: The minimum number of minutes for durations will be contained in the 'minimum_duration' attribute of the 'scheduler_type' element.
             * maximum_duration: The maximum number of minutes for durations will be contained in the 'maximum_duration' attribute of the 'scheduler_type' element.
             * start_time_interval: The number of minutes for start time intervals will be contained in the 'start_time_interval' attribute of the 'scheduler_type' element.
             * default_min_lead_time: The number of days the default minimum lead time for appointments.
             * @memberof Site17MMServicesUtil
             */
            getAvailabilitiesInRange: function(this: IAbstractAjaxProcessor & ISite17MMServicesUtilPrototype): void {
                var scheduler: x_g_inte_site_17.ReservationScheduler;
                try {
                    scheduler = getReservationScheduler();
                } catch (e) {
                    this.setError(e);
                    return;
                }
                var include = x_g_inte_site_17.ReservationSchedulerAjax.getAvailabilitiesInRange(this, scheduler);
                if (new global.ArrayUtil().contains(include, XML_NAME_default_min_lead_time)) {
                    var element = this.newItem(XML_NAME_default_min_lead_time);
                    element.setAttribute('value', '' + getDefaultMinLeadTimeDays());
                }
            },
    
            /**
             * Gets the next available time slot.
             * @description
             * The 'availability' element will contain an attribute named 'success' which will contain the value 'true' if an availability was returned; otherwise, it will contain 'false'.
             * If the 'success' attribute of the 'availability' element is 'true', then the 'startDateTime' will contain the start date and time of the next
             * availability.
             * The 'durationMinutes' attribute indicates the number of contiguous minutes that are open for appointments. This attrbute may be missing
             * if no 'sys_parm_to' parameter was provided all future times are open for appointments.
             * 
             * Parameters are:
             * sys_parm_from: The date and time to start from.
             * sys_parm_to: The optional end date and time to search within.
             * sys_parm_duration: The optional minimum appointments duration in minutes.
             * sys_parm_include: The optional list of comma-separated result inclusions.
             * 
             * Values for result inclusions are:
             * approval_group: If there is an approval group, the sys_id will be contained in the 'approval_group' attribute of the 'scheduler_type' element.
             * assignment_group: The sys_id of the assignment group will be contained in the 'assignment_group' attribute of the 'scheduler_type' element.
             * duration_increment: The number of minutes for duration increments will be contained in the 'duration_increment' attribute of the 'scheduler_type' element.
             * minimum_duration: The minimum number of minutes for durations will be contained in the 'minimum_duration' attribute of the 'scheduler_type' element.
             * maximum_duration: The maximum number of minutes for durations will be contained in the 'maximum_duration' attribute of the 'scheduler_type' element.
             * start_time_interval: The number of minutes for start time intervals will be contained in the 'start_time_interval' attribute of the 'scheduler_type' element.
             * default_min_lead_time: The number of days the default minimum lead time for appointments.
             * @memberof Site17MMServicesUtil
             */
            getNextAvailableTimeSlot: function(this: IAbstractAjaxProcessor & ISite17MMServicesUtilPrototype): void {
                var scheduler: x_g_inte_site_17.ReservationScheduler;
                try {
                    scheduler = getReservationScheduler();
                } catch (e) {
                    this.setError(e);
                    return;
                }
                var include = x_g_inte_site_17.ReservationSchedulerAjax.getNextAvailableTimeSlot(this, scheduler);
                if (new global.ArrayUtil().contains(include, XML_NAME_default_min_lead_time)) {
                    var element = this.newItem(XML_NAME_default_min_lead_time);
                    element.setAttribute('value', '' + getDefaultMinLeadTimeDays());
                }
            },
    
            type: "Site17MMServicesUtil"
        });
    
        return constructor;
    })();
}
