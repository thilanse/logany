export class DateFormatter{
    static getCurrentDate(){
        var date = new Date();
        var dd = date.getDate().toString();
        var mm = (date.getMonth() + 1).toString();
        var yyyy = date.getFullYear().toString();
    
        return mm+"/"+dd+"/"+yyyy;
    }
}