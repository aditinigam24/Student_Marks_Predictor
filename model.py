# model.py
import pandas as pd
from sklearn.linear_model import LinearRegression
import pickle

# load dataset
data = pd.read_excel("student_data.xlsx")

X = data[['Hours','Attendance','PreviousMarks']]
y = data['FinalMarks']

# train model
model = LinearRegression()
model.fit(X,y)

# save model
pickle.dump(model,open("model.pkl","wb"))

print("Model trained and saved!")