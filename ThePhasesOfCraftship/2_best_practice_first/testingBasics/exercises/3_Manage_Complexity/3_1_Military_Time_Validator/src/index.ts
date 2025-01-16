export type Time = string;
export type Result = true | false;

export class MilitaryTimeValidator {
    static validate(times: Time): Result {
        return  this.validateType(times) && this.validateEmptiness(times) && this.validateFormat(times) && this.validateTimes(times);
    }

    private static validateType(times: Time) {
        if (times === null || times === undefined || typeof times !== "string") {
            throw new Error("the input time should be a string")
        }
        return true;
    }

    private static validateEmptiness(times: Time) {
        if (times.length === 0) {
            throw new Error("the input time should not be an empty string")
        }
        return true;
    }

    private static validateFormat(times: Time) {
        const validMilitaryTimeFormatRegularExpression = /^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/;
        return validMilitaryTimeFormatRegularExpression.test(times);
    }

    private static validateTimes(times: Time) {
        const [timeFrom, timeTo] = times.split(' - ');
        return (this.validateTime(timeFrom) && this.validateTime(timeTo));
    }

    private static validateTime(time: Time): Result {
        const [hours, minutes] = time.split(':');
        return (this.validateHours(hours) && this.validateMinutes(minutes));
    }

    private static validateHours(hours: Time): Result {
        return (Number(hours) >= 0 && Number(hours) <= 23);
    }

    private static validateMinutes(minutes: Time): Result {
        return (Number(minutes) >= 0 && Number(minutes) <= 59);
    }
}