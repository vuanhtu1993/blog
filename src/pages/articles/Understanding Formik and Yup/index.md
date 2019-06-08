### What is formik, yup

### Validation in Formik
##### 1. Validation theo điều kiện ràng buộc (có cha thì mới validate )con
```javascript
// Sử dụng API của Yup
address: Yup.string()
            .test("description", "must required", function (value) {
              const fullName = this.parent.fullName;
              if(fullName) {
                return !!value;
              }
              return true;
            })
```

##### 2. Chỉ khi nào chọn [true] mới pass validate  
```javascript
agreePolicy: Yup.boolean()
             .oneOf([true], 'Must Accept Terms and Conditions')
```

###